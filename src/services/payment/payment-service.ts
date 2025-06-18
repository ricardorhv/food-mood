import { api } from "@/lib/axios";
import { PaymentMethod } from "@/types/payment";

export async function getPayments() {
  try {
    const { data } = await api.get<PaymentMethod>("/payment");

    return {
      success: true,
      data,
    };
  } catch {
    return {
      success: false,
      errors: `Erro ao buscar dados do pagamento`,
    };
  }
}
