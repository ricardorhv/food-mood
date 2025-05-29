import { api } from "@/lib/axios";
import { z } from "zod";

const signUpBodyRequestSchema = z.strictObject({
  name: z.string().nonempty({
    message: "Campo obrigatório!",
  }),
  phone: z.string().nonempty({
    message: "Campo obrigatório!",
  }),
  password: z
    .string()
    .nonempty({
      message: "Campo obrigatório!",
    })
    .min(8, {
      message: "A senha deve conter pelo menos 8 caracteres!",
    }),
  email: z
    .string()
    .nonempty({
      message: "Campo obrigatório!",
    })
    .email({
      message: "Email inválido!",
    }),
});

type SignUpBodyRequest = z.infer<typeof signUpBodyRequestSchema>;

type SignUpResponse = {
  success: boolean;
  errors?: any;
  data?: any;
};

export async function signUp(
  signUpBodyRequest: SignUpBodyRequest
): Promise<SignUpResponse> {
  const {
    data: user,
    success,
    error,
  } = signUpBodyRequestSchema.safeParse(signUpBodyRequest);

  if (!success) {
    console.log(error.format());
    return {
      success: false,
      errors: error.format(),
    };
  }

  try {
    const { data } = await api.post("/user/sign-up", user);
    console.log(data);

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
