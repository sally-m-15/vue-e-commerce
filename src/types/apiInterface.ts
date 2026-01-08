export interface ProductsResponse {
  results: number;
  data: Product[];
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number | null;
  sold: number | null;
  price: number;
  imageCover: string;
  images: string[];
  category: Category;
  brand: Brand;
  subcategory: SubCategory[];
  ratingsAverage: number;
  ratingsQuantity: number;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface SubCategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
};

export interface CategoriesResponse {
  results: number;
  data: Category[];
}

export interface singleCategoryResponse {
  results?: number;
  metadata?: any;
  data: SubCategory[];
}

export interface CartProduct {
  _id: string;
  title: string;
  quantity: number;
  imageCover: string;
  subcategory: any[];
}

export interface CartItem {
  _id: string;
  count: number;
  price: number;
  product: CartProduct;
}

export interface CartData {
  _id: string;
  cartOwner: string;
  products: CartItem[];
  totalCartPrice: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CartResponse {
  status: string;
  message: string;
  numOfCartItems: number;
  cartId: string;
  data: CartData;
}

export interface WishlistResponse {
  status: string;
  message: string;
  data: string[];
}

export interface WishlistProduct {
  _id: string;
  title: string;
  price: number;
  imageCover: string;
}

export interface WishlistProduct {
  _id: string;
  title: string;
  price: number;
  imageCover: string;
}

export interface GetWishlistResponse {
  status: string;
  count: number;
  data: WishlistProduct[];
}
