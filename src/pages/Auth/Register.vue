<template>

    <div class="container mx-auto py-36 w-full p-4 px-14">
      <h2 class="dark:text-white my-8 text-3xl text-gray-950">register now</h2>
      <Form
        @submit="submitRegister"
        :validation-schema="registerUserSchema"
        v-slot="{ meta }"
      >
        <div class="mb-5 relative" v-for="item in authData" :key="item.id">
          <label
            :for="item.id"
            class="text-lg font-light cursor-pointer text-gray-900 dark:text-white"
            >{{ item.name }} :</label
          >
          <Field
            :name="item.name"
            :type="
              item.type === 'password'
                ? item.show
                  ? 'text'
                  : 'password'
                : item.type
            "
            :id="item.id"
            :autocomplete="item.autocomplete"
            class="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <ErrorMessage
            :name="item.name"
            class="bg-red-200 border border-red-800 text-red-600 p-4 mt-2 rounded-lg block whitespace-pre-line"
          />
          <p
            v-if="item.name === 'email' && register.status"
            class="bg-red-200 border border-red-800 text-red-600 p-4 mt-2 rounded-lg block whitespace-pre-line"
          >
            {{ register.status }}
          </p>
          <v-icon
            name="fa-regular-eye"
            v-if="item.type === 'password'"
            @click="item.show = !item.show"
            class="absolute right-3 top-10 cursor-pointer"
            role="button"
            aria-label="Toggle password visibility"
          />
        </div>
        <button
          type="submit"
          :disabled="register.isLoading"
          class="text-gray-500 cursor-pointer ms-auto block border p-2 px-4 text-xl rounded-xl my-12"
          :class="[meta.valid
              ? 'bg-green-600 hover:bg-green-800 text-white border-0'
              : 'bg-white',
            register.isLoading ? 'cursor-wait' : 'cursor-pointer'
            ]
          "
        >
        <span v-if="register.isLoading">loading...</span>
        <span v-else>Register now</span>
        </button>
      </Form>
    </div>
</template>

<script setup lang="ts">
import { ErrorMessage, Field, Form } from "vee-validate";
import { userData } from "@/composables/services/useAuthData";
import { registerUserSchema } from "@/composables/services/useAuthSchema";
import { useAuthStore } from "@/composables/services/useAuthApi";
import { onMounted } from "vue";

const { authData } = userData();
const register = useAuthStore();

async function submitRegister(values: any) {
  await register.registerUserValue(values);
}

onMounted(() => {
  register.status = "";
});
</script>
<style>
  
</style>
