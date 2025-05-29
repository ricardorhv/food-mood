import { api } from "@/lib/axios";
import { z } from "zod";

const signInBodyRequestSchema = z.strictObject({
  password: z.string().nonempty({
    message: "Campo obrigatório!",
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

type SignInBodyRequest = z.infer<typeof signInBodyRequestSchema>;

type SignInResponse = {
  success: boolean;
  errors?: any;
  data?: any;
};

export async function signIn(
  signInBodyRequest: SignInBodyRequest
): Promise<SignInResponse> {
  const {
    data: user,
    success,
    error,
  } = signInBodyRequestSchema.safeParse(signInBodyRequest);

  if (!success) {
    console.log(error.format());
    return {
      success: false,
      errors: error.format(),
    };
  }

  try {
    const { data } = await api.post("/user/sign-in", user);
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
