import { reactive } from "vue";

export const authData = reactive([
  { id: "large-input", name: "name", type: "text", autocomplete: "name" },
  { id: "base-input", name: "email", type: "email", autocomplete: "email" },
  {
    id: "password-input",
    name: "password",
    type: "password",
    show: false,
    autocomplete: "new-password",
  },
  {
    id: "rePassword-input",
    name: "rePassword",
    type: "password",
    show: false,
    autocomplete: "new-password",
  },
  { id: "phone-input", name: "phone", type: "tel", autocomplete: "tel" },
]);

export function userData() {
  return { authData };
}

export async function hashData(input: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((ele) => ele.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}
