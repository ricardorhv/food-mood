import { api } from "@/lib/axios";
import { UserAddress } from "@/types/address";
import { z } from "zod";

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

const addressBodyRequestSchema = z.strictObject({
  name: z.string().nonempty({
    message: "Campo obrigatório!",
  }),
  street: z.string().nonempty({
    message: "Campo obrigatório!",
  }),
  neighborhood: z.string().nonempty({
    message: "Campo obrigatório!",
  }),
  city: z.string().nonempty({
    message: "Campo obrigatório!",
  }),
  houseNumber: z.string().nonempty({
    message: "Campo obrigatório!",
  }),
  state: z.string().nonempty({
    message: "Campo obrigatório!",
  }),
});

type AddressBodyRequest = z.infer<typeof addressBodyRequestSchema>;

export async function createAddress(addressBodyRequest: AddressBodyRequest) {
  const {
    data: address,
    success,
    error,
  } = addressBodyRequestSchema.safeParse(addressBodyRequest);

  if (!success) {
    console.log(error.format());
    return {
      success: false,
      errors: error.format(),
    };
  }

  try {
    const { data } = await api.post("/user/address", address);
    return {
      success: true,
      data,
    };
  } catch (error: any) {
    const message = error?.response?.data?.message;

    return {
      success: false,
      errors: [
        {
          email: {
            message: message,
          },
        },
      ],
    };
  }
}
