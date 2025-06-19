import { api } from "@/lib/axios";
import { CreateOrder, Order, ProductList } from "@/types/order";
import { ProductCart } from "@/types/product";

export async function createOrder(
  paymentId: string,
  addressId: string,
  productsCart: ProductCart[],
  shippingRate: number
) {
  try {
    const productList: ProductList[] = productsCart.map(
      ({ id, price, quantity }) => {
        const subtotal = price * quantity;

        return {
          productId: id,
          subtotal,
          quantity,
        };
      }
    );

    const subtotal = productList.reduce(
      (acc, product) => acc + product.subtotal,
      0
    );

    const orderData: CreateOrder = {
      addressId,
      paymentId,
      productList,
      shippingRate,
      status: "PENDING",
      subtotal,
      totalPrice: subtotal + shippingRate,
    };

    const { data } = await api.post<Order[]>("/order", orderData);

    return {
      success: true,
      data,
      errors: "",
    };
  } catch {
    return {
      success: false,
      data: [],
      errors: `Erro ao buscar dados do pagamento`,
    };
  }
}
