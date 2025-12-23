import { object, string } from "yup";

export const checkoutShema = object({
  country: string().required("country is required"),
  city: string().required("city is required"),
  address: string().required("address is required"),
  phone: string().required("phone is riquired"),
});
