import { api } from "@/lib/axios";
import { UserAddress } from "@/types/address";

export async function getAddresses() {
  try {
    const { data } = await api.get<UserAddress[]>("/user/address");

    return {
      success: true,
      data,
      errors: "",
    };
  } catch {
    return {
      success: false,
      data: [],
      errors: `Erro ao buscar endereço`,
    };
  }
}
