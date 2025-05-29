import { colors } from "@/styles/colors";
import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function SignIn() {
  return (
    <View style={styles.signInContainer}>
      <TextInput
        placeholderTextColor={colors["gray-400"]}
        style={styles.inputField}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        placeholderTextColor={colors["gray-400"]}
        style={styles.inputField}
        placeholder="Senha"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.btnSignIn}>Entrar</TouchableOpacity>
    </View>
  );
}
