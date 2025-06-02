import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAuth = () => {
  async function authenticate(userId: string) {
    await AsyncStorage.setItem("loggedUser", userId);
  }

  async function getLoggedUser() {
    return await AsyncStorage.getItem("loggedUser");
  }

  return {
    authenticate,
    getLoggedUser,
  };
};
