import { api } from "@/lib/axios";
import { z } from "zod";

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  password: z.string(),
  createdAt: z.date(),
});

type User = z.infer<typeof userSchema>;

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
