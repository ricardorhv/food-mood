type StatusOrder =
  | "PENDING"
  | "CANCELED"
  | "DELIVERED"
  | "DELIVERING"
  | "PROCESSING";

export interface Order {
  id: string;
  subtotal: number;
  totalPrice: number;
  status: StatusOrder;
  shippingRate: number;

  paymentId: string;
  userId: string;
  addressId: string;
}

export interface ProductList {
  productId: string;
  subtotal: number;
  quantity: number;
}

export interface CreateOrder {
  subtotal: number;
  totalPrice: number;
  status: StatusOrder;
  shippingRate: number;
  paymentId: string;
  addressId: string;
  productList: ProductList[];
}
