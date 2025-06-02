import { api } from "@/lib/axios";
import { User } from "@/types/user";
import { z } from "zod";

const updateUserBodyRequestSchema = z.strictObject({
  name: z.string(),
  phone: z.string(),
  password: z.string().min(8).optional(),
  email: z.string().email({
    message: "Email inválido!",
  }),
});

type UpdateUserBodyRequest = z.infer<typeof updateUserBodyRequestSchema>;

export async function getUser(userId: string | null) {
  if (!userId || !userId.trim()) {
    return {
      success: false,
      errors: "ID do usuário inválido",
    };
  }

  try {
    const { data } = await api.get<User>(`/user/${userId}`);

    return {
      success: true,
      data,
    };
  } catch {
    return {
      success: false,
      errors: `Erro ao buscar dados do usuário ${userId}`,
    };
  }
}

export async function updateUser(
  userId: string | null,
  updateUserBodyRequest: UpdateUserBodyRequest
) {
  if (!userId || !userId.trim()) {
    return {
      success: false,
      errors: "ID do usuário inválido",
    };
  }

  const {
    success,
    data: updatedUser,
    error: errors,
  } = updateUserBodyRequestSchema.safeParse(updateUserBodyRequest);

  if (!success) {
    return {
      success: false,
      errors: "Erro ao atualizar os dados. Valide suas informações!",
    };
  }

  try {
    const { data } = await api.patch<User>(`/user/${userId}`, updatedUser);

    return {
      success: true,
      data,
    };
  } catch {
    return {
      success: false,
      errors: `Erro ao atualizar os dados. Tente novamente mais tarde.`,
    };
  }
}
