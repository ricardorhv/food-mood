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

  async function handleSignIn() {
    const { success, data, errors } = await signIn({
      email,
      password,
    });

    if (!success) {
      Alert.alert("Erro ao criar uma conta, revise seus dados!");
      return;
    }

    router.push("/app/home");
  }

  return (
    <View style={styles.signInContainer}>
      <TextInput
        placeholderTextColor={colors["gray-400"]}
        style={styles.inputField}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <TextInput
        placeholderTextColor={colors["gray-400"]}
        style={styles.inputField}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={handleSignIn} style={styles.btnSignIn}>
        <Text style={styles.btnTextSignIn}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
