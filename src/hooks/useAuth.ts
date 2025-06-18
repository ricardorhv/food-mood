import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAuth = () => {
  async function authenticate(accessToken: string) {
    await AsyncStorage.setItem("loggedUser", accessToken);
  }

  async function signOut() {
    await AsyncStorage.removeItem("loggedUser");
  }

  async function getLoggedUser() {
    return await AsyncStorage.getItem("loggedUser");
  }

  return {
    authenticate,
    getLoggedUser,
    signOut,
  };
};
