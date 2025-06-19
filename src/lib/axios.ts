import { useAuth } from "@/hooks/useAuth";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://b8d2-177-38-164-53.ngrok-free.app",
});

api.interceptors.request.use(
  async (config) => {
    const { getLoggedUser } = useAuth();
    const token = await getLoggedUser();

    console.log(token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  }
  // (error) => {
  //   if (error.response && error.response.status === 401) {
  //     const { signOut } = useAuth();
  //     const router = useRouter();
  //     signOut();
  //     router.dismissTo("/auth/sign-in");
  //   }
  //   return Promise.reject(error);
  // }
);
