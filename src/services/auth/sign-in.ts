import { useAuth } from "@/hooks/useAuth";
import { api } from "@/lib/axios";
import { z } from "zod";

const signInBodyRequestSchema = z.strictObject({
  password: z.string().nonempty({
    message: "Senha obrigatório!",
  }),
  email: z
    .string()
    .nonempty({
      message: "Email obrigatório!",
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

type SignInBodyResponse = {
  accessToken: string;
  email: string;
  userId: string;
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
      errors:
        error.format()?.email?._errors[0] ??
        error.format()?.password?._errors[0],
    };
  }

  try {
    const { data } = await api.post<SignInBodyResponse>("/auth/sign-in", user);
    const { authenticate } = useAuth();

    authenticate(data.accessToken);

    return {
      success: true,
      data,
    };
  } catch (error: any) {
    const message = error?.response?.data?.message;

    return {
      success: false,
      errors: message,
    };
  }
}
