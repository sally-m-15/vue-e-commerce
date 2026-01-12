<template>

    <div class="container mx-auto py-32 w-full p-4 px-14">
      <h2 class="dark:text-white my-8 text-3xl text-gray-950">login now</h2>
      <Form
        @submit="submitLogin"
        :validation-schema="loginUserSchema"
        v-slot="{ meta }"
      >
        <div class="mb-5 relative" v-for="item in filterUseData" :key="item.id">
          <label
            :for="item.id"
            class="text-lg cursor-pointer font-light text-gray-900 dark:text-white"
            >{{ item.name }} :</label
          >
          <Field
            :name="item.name"
            :autocomplete="item.autocomplete"
            :type="
              item.type === 'password'
                ? item.show
                  ? 'text'
                  : 'password'
                : item.type
            "
            :id="item.id"
            class="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-green-500 dark:focus:border-blue-500"
          />
          <ErrorMessage
            :name="item.name"
            class="bg-red-200 border border-red-800 text-red-600 p-4 mt-2 rounded-lg block whitespace-pre-line"
          />
          <p
            v-if="item.name === 'email' && login.status"
            class="bg-red-200 border border-red-800 text-red-600 p-4 mt-2 rounded-lg block whitespace-pre-line"
          >
            {{ login.status }}
          </p>
          <v-icon
            name="fa-regular-eye"
            v-if="item.type === 'password'"
            @click="item.show = !item.show"
            class=" absolute right-3 top-10 cursor-pointer"
            role="button"
            aria-label="Toggle password visibility"
          />
        </div>
          <router-link :to="{ name: 'reset-password' }" class="dark:text-white"
            >Forgot your password?</router-link
          >
          <div class="flex flex-col sm:flex-row gap-4 sm:justify-between mt-5">
            <button
            :disabled="login.isLoading"
            type="submit"
            class="text-gray-500 order-2 border p-2 px-4 text-xl rounded-xl"
            :class="[  meta.valid
                ? 'bg-green-600 hover:bg-green-800 text-white border-0'
                : 'bg-white',
                login.isLoading ? 'cursor-wait' : 'cursor-pointer'
            ]"
          >
          <span v-if="login.isLoading">Logging...</span>
          <span v-else>login now</span>
          </button>
          <button
          @click="goToRegister"
            class="text-gray-500 order-1 border p-2 px-4 text-xl rounded-xl cursor-pointer"
          >
            register now
          </button>
          </div>
      </Form>
    </div>
</template>

<script setup lang="ts">
import { hashData, userData } from "@/composables/services/useAuthData";
import { ErrorMessage, Field, Form } from "vee-validate";
import { loginUserSchema } from "@/composables/services/useAuthSchema";
import { useAuthStore } from "@/composables/services/useAuthApi";
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";


const { authData } = userData();
const login = useAuthStore();
const router = useRouter();

const filterUseData = computed(() => {
  return authData.filter((ele) => {
    return ele.name === "email" || ele.name === "password";
  });
});

async function submitLogin(values: any) {
  const savedPasswordHash = localStorage.getItem("password");
  const inputPasswordHash = await hashData(values.password);
  if (inputPasswordHash === savedPasswordHash) {
    await login.loginUserValue(values);
    router.push({ name: "home" });
  }
}

function goToRegister() {
  router.push({name: 'sign-up'})
}
onMounted(() => {
  login.status = "";
});
</script>
<style>
  
</style>
