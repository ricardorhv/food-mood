import { colors } from "@/styles/colors";
import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function SignUp() {
  return (
    <View style={styles.signUpContainer}>
      <TextInput
        placeholderTextColor={colors["gray-400"]}
        style={styles.inputField}
        placeholder="Nome"
      />
      <TextInput
        placeholderTextColor={colors["gray-400"]}
        style={styles.inputField}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        placeholderTextColor={colors["gray-400"]}
        style={styles.inputField}
        placeholder="Telefone"
        keyboardType="numeric"
      />
      <TextInput
        placeholderTextColor={colors["gray-400"]}
        style={styles.inputField}
        placeholder="Senha"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.btnSignUp}>Cadastrar</TouchableOpacity>
    </View>
  );
}
