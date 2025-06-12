import { signIn } from "@/services/auth/sign-in";
import { colors } from "@/styles/colors";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  function redirectToSingUp() {
    router.push("/auth/sign-up");
  }

  async function handleSignIn() {
    const { success, errors } = await signIn({
      email,
      password,
    });

    if (!success) {
      Alert.alert(
        errors ?? "Erro ao realizar login. Tente novamente mais tarde!"
      );
      return;
    }

    router.dismissTo("/app");
  }

  return (
    <View style={styles.signInContainer}>
      <TextInput
        placeholderTextColor={colors["gray-600"]}
        style={styles.inputField}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <TextInput
        placeholderTextColor={colors["gray-600"]}
        style={styles.inputField}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={handleSignIn} style={styles.btnSignIn}>
        <Text style={styles.btnTextSignIn}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={redirectToSingUp} style={styles.createAccount}>
        <Text style={styles.createAccountText}>Crie sua conta</Text>
      </TouchableOpacity>
    </View>
  );
}
