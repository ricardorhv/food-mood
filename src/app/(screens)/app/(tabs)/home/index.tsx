import { Text, View } from "react-native";
import { styles } from "./styles";

export default function AppHome() {
  return (
    <View style={styles.container}>
      <Text>Seja Bem-Vindo</Text>
    </View>
  );
}

/**
 * <Layout>
 *    <home>
 *    <app>
 *      <layout (tabs)>
 *    </app>
 *    <auth></auth>
 * </layout>
 *
 */
