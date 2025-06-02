import { useAuth } from "@/hooks/useAuth";
import { getUser } from "@/services/user";
import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  function loadData(
    changedName = "",
    changedEmail = "",
    changedPhone = "",
    changedPassword = ""
  ) {
    setName(changedName);
    setEmail(changedEmail);
    setPhone(changedPhone);
    setPassword(changedPassword);
  }

  useEffect(() => {
    async function handleGetUser() {
      const { getLoggedUser } = useAuth();
      const userId = await getLoggedUser();
      console.log(userId);

      const { success, data: userData } = await getUser(userId);

      if (success) {
        loadData(userData?.name, userData?.email, userData?.phone);
      }
    }

    handleGetUser();
  }, []);

  return (
    <View style={styles.wrapperContainer}>
      <View style={styles.form}>
        <View style={styles.labelInput}>
          <Text style={styles.label}>Nome</Text>
          <TextInput value={name} style={styles.inputField} />
        </View>

        <View style={styles.labelInput}>
          <Text style={styles.label}>Telefone</Text>
          <TextInput value={phone} style={styles.inputField} />
        </View>

        <View style={styles.labelInput}>
          <Text style={styles.label}>Email</Text>
          <TextInput value={email} style={styles.inputField} />
        </View>

        <View style={styles.labelInput}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            value={password}
            style={styles.inputField}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.btnUpdate}>
          <Text style={styles.btnTextUpdate}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
