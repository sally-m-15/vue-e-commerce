<template>
  <div class="min-h-screen relative">
    <LoadingSpinner />
    <div class="py-28 flex flex-col md:flex-row gap-10 md:gap-0">
      <section
        class="md:w-3/5 order-2 md:order-1 flex flex-col mx-10 border-t md:border-t-0 py-10 border-gray-300"
      >
        <h2 class="text-center text-3xl font-bold mb-10 dark:text-white">
          checkout
        </h2>
        <p class="text-xl font-medium pb-4 dark:text-white">
          Shopping information
        </p>
        <Form
          @submit="submitCash"
          :validation-schema="checkoutShema"
          v-slot="{ meta }"
        >
          <div
            v-for="field in checkoutFields"
            :key="field.id"
            class="flex flex-col"
          >
            <label
              :for="field.id"
              class="text-lg py-5 font-light text-gray-900 dark:text-white pb-2"
              >{{ field.name }}</label
            >
            <Field
              v-if="field.type !== 'select'"
              :name="field.name"
              :type="field.type"
              :id="field.id"
              class="w-full py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <Field
              v-if="field.type === 'select'"
              as="select"
              :name="field.name"
              :id="field.id"
              v-model="fromData[field.id as keyof ICheckoutForm]"
              :disabled="field.id === 'city' && !fromData.country"
              class="w-full py-2 px-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 appearance-none"
            >
              <option value="" disabled selected>
                {{
                  field.id === "city" && !fromData.country
                    ? "Select country first"
                    : `Select ${field.name}`
                }}
              </option>
              <option v-for="opt in field.options" :key="opt" :value="opt">
                {{ opt }}
              </option>
            </Field>
            <ErrorMessage
              :name="field.name"
              class="bg-red-300 text-red-600 p-3 mt-1 rounded-lg"
            />
          </div>
          <div
            class="flex justify-center mt-10 gap-16 font-bold dark:text-white"
          >
            <button
              type="submit"
              @click="paymentMethod = 'cash'"
              :class="
                meta.valid
                  ? 'bg-green-600 hover:bg-green-800 text-white border-0'
                  : 'bg-white'
              "
              class="px-4 text-xs cursor-pointer text-gray-500 border md:text-xl sm:px-10 rounded-xl py-2 xl:px-20"
            >
              Pay Cash
            </button>
            <button
              @click="paymentMethod = 'online'"
              :class="
                meta.valid
                  ? 'bg-green-600 hover:bg-green-800 text-white border-0'
                  : 'bg-white'
              "
              type="submit"
              class="text-gray-500 cursor-pointer border md:text-xl px-4 sm:px-10 text-xs rounded-xl py-2 xl:px-20"
            >
              Pay Now
            </button>
          </div>
        </Form>
      </section>
      <section
        class="md:border-l md:w-2/5 order-1 md:order-2 border-gray-300 bg-gray-100 dark:bg-gray-950"
      >
        <CartCheckout />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { checkoutFields, cityOptions } from "@/data/checkoutFields";
import type { ICheckoutForm } from "@/types/userInterface";
import { ErrorMessage, Field, Form, useField } from "vee-validate";
import { reactive, ref, watch } from "vue";
import { checkoutShema } from "@/composables/services/checkout.schema";
import CartCheckout from "@/components/cartCheckout.vue";
import { useCheckoutStor } from "@/api/checkout";
import { useRouter } from "vue-router";

const checkout = useCheckoutStor();
const router = useRouter();

const paymentMethod = ref<"cash" | "online">("cash");
const fromData = reactive<ICheckoutForm>({
  country: "",
  address: "",
  city: "",
  details: "",
  phone: "",
});

const countryField = checkoutFields.find((ele) => ele.id === "country");
if (countryField) {
  countryField.options = Object.keys(cityOptions);
}

watch(
  () => fromData.country,
  (newCountry) => {
    const cityField = checkoutFields.find((ele) => ele.id === "city");
    if (!cityField) return;
    cityField.options = newCountry ? cityOptions[newCountry] : [];
    fromData.city = "";
  }
);

async function submitCash(values: any) {
  if (paymentMethod.value === "cash") {
    await checkout.cashOrder(values);
    router.push({ name: "allorder" });
  } else {
    await checkout.onlinCheckout(values);
  }
}
</script>

<style scoped></style>
