import { signUp } from "@/services/auth/sign-up";
import { colors } from "@/styles/colors";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleSignUp() {
    const { success } = await signUp({ name, email, phone, password });

    if (!success) {
      Alert.alert("Erro ao criar uma conta, revise seus dados!");
      return;
    }

    router.push("/auth/sign-in");
  }

  return (
    <View style={styles.signUpContainer}>
      <TextInput
        placeholderTextColor={colors["gray-400"]}
        style={styles.inputField}
        placeholder="Nome"
        onChangeText={setName}
      />
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
        placeholder="Telefone"
        keyboardType="numeric"
        onChangeText={setPhone}
      />
      <TextInput
        placeholderTextColor={colors["gray-400"]}
        style={styles.inputField}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={handleSignUp} style={styles.btnSignUp}>
        <Text style={styles.btnTextSignUp}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
