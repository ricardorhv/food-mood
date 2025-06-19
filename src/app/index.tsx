import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.homeContainer}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require("@/assets/images/logo.png")}
      />
      <View style={styles.wrapperActions}>
        <Link asChild href="/auth/sign-up">
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.btnText}>Cadastrar</Text>
          </TouchableOpacity>
        </Link>

        <Link asChild href="/auth/sign-in">
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.btnText}>Entrar</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
