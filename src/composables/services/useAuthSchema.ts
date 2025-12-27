import { object, ref as refYup, string } from "yup";
import { hashData } from "./useAuthData";
import { computed, ref } from "vue";

export const isSchema = ref(false);

export const registerUserSchema = object({
  name: string().required("name is required").min(3),
  email: string()
    .required("email is required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
  password: string()
    .required("password is required")
    .matches(
      /^[A-Za-z][A-Za-z0-9]{5,8}$/,
      `must be
    * Start with a letter (either uppercase or lowercase).
    * Be between 6 and 9 characters in total.
    * Can only contain letters (A-Z or a-z) and numbers (0-9)
    `
    ),
  rePassword: string()
    .required("re-Password is required")
    .oneOf([refYup("password")], "re-Password pattern is inavalid"),
  phone: string()
    .required("phone is required")
    .matches(/^01[0-2,5]{1}[0-9]{8}$/, "invalid Phone"),
});

export const loginUserSchema = object({
  email: string()
    .required("email is required")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      `Invalid email format.`
    ),
  password: string()
    .required("password is required")
    .matches(/^[A-Za-z][A-Za-z0-9]{5,8}$/),
});

export const userSchema = computed(() => {
  if (!isSchema.value) {
    return object({
      phone: string()
        .required("phone is required")
        .test("true", async function (values: any) {
          const phone = values;
          const phonetohash = await hashData(phone);
          const phoneLocal = localStorage.getItem("phone");
          if (phonetohash === phoneLocal) {
            return true;
          } else {
            return this.createError({
              message: `This phone is not registered. Please check and try again.`,
            });
          }
        }),
    });
  } else {
    return object({
      password: string()
        .required("password is required")
        .matches(
          /^[A-Za-z][A-Za-z0-9]{5,8}$/,
          `must be
    * Be between 6 and 9 characters in total.
    `
        ),
    });
  }
});
