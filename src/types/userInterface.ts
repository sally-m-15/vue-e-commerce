export interface IUserData {
  name: string;
  email: string;
  _id: string;
  role: string;
}

export interface ICheckoutForm {
  country: string;
  city: string;
  address: string;
  details: string;
  phone: string;
}

export interface CheckoutField {
  id: string;
  name: string;
  type: "text" | "tel" | "select";
  options?: string[];
}
