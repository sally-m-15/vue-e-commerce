<template>
  <section class="h-screen w-full py-20 dark:bg-gray-950">
    <div
      class="lg:w-2xl md:w-96 w-80 py-8 rounded-4xl mx-auto h-96 dark:bg-gray-800 dark:shadow-amber-100 shadow-2xl bg-gray-200 shadow-gray-950"
    >
      <Form
        v-if="!isVisible"
        @submit="submitCheckout"
        :validation-schema="userSchema"
        v-slot="{ meta }"
      >
        <div class="mb-5 mx-auto px-4 lg:px-0 lg:w-96 my-12">
          <h2 class="text-center text-2xl dark:text-white lg:text-4xl">
            Enter registered phone
          </h2>
          <Field
            autocomplete="tel"
            name="phone"
            type="tel"
            class="mt-8 p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <ErrorMessage
            name="phone"
            class="bg-red-200 w-full border border-red-800 text-red-600 p-4 mt-2 rounded-lg block whitespace-pre-line"
          />
          <button
            type="submit"
            class="text-gray-500 ms-auto block border p-2 px-4 text-xl rounded-xl my-12"
            :class="
              meta.valid
                ? 'bg-green-700 hover:bg-green-800 text-white border-0'
                : 'bg-white'
            "
          >
            Register now
          </button>
        </div>
      </Form>
      <Form
        v-else="isVisible"
        @submit="restPassword"
        :validation-schema="userSchema"
        v-slot="{ meta, values }"
      >
        <div class="mb-5 mx-auto px-4 lg:px-0 lg:w-96 my-12">
          <h2 class="text-center text-2xl dark:text-white lg:text-4xl">
            Reset Password
          </h2>
          <div class="relative">
            <Field
              name="password"
              autocomplete="newpassword"
              :type="showPassword ? 'text' : 'password'"
              class="p-2 w-full mt-8 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <i
              @click="showPassword = !showPassword"
              class="fa-regular fa-eye absolute right-3 top-12 cursor-pointer"
            ></i>
          </div>
          <ErrorMessage
            name="password"
            class="bg-red-200 w-full border border-red-800 text-red-600 p-4 mt-2 rounded-lg block whitespace-pre-line"
          />
          <button
            type="submit"
            class="text-gray-500 ms-auto block border p-2 px-4 text-xl rounded-xl my-12"
            :class="
              meta.valid
                ? 'bg-green-700 hover:bg-green-800 text-white border-0'
                : 'bg-white'
            "
          >
            submit
          </button>
        </div>
      </Form>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ErrorMessage, Field, Form } from "vee-validate";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { hashData } from "@/composables/services/useAuthData";
import { userSchema, isSchema } from "@/composables/services/useAuthSchema";

const router = useRouter();
const isVisible = ref(false);
const showPassword = ref(false);
const verifiedPhone = ref("");

function submitCheckout(values: any) {
  if (!isVisible.value) {
    verifiedPhone.value = values.phone;
    isVisible.value = true;
    isSchema.value = true;
  }
}

async function restPassword(values: any) {
  const hashedNew = await hashData(values.password);
  localStorage.setItem("password", hashedNew);
  router.push({ name: "sign-in" });
}
</script>

<style scoped></style>
