import { useAuth } from "@/hooks/useAuth";
import { getUser, updateUser } from "@/services/user/user-service";
import { useEffect, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
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

  async function getUserId() {
    const { getLoggedUser } = useAuth();
    const userId = await getLoggedUser();

    return userId;
  }

  useEffect(() => {
    async function handleGetUser() {
      const userId = await getUserId();
      const { success, data: userData } = await getUser(userId);

      if (success) {
        loadData(userData?.name, userData?.email, userData?.phone);
      }
    }

    handleGetUser();
  }, []);

  async function handleUpdateUser() {
    const userId = await getUserId();
    const hasChangedPassword = !!password.trim();

    const updatedUser = {
      name,
      email,
      phone,
      password,
    };

    const { success, errors } = await updateUser(
      userId,
      hasChangedPassword
        ? updatedUser
        : {
            name,
            email,
            phone,
          }
    );

    if (!success) {
      Alert.alert(errors as string);
      return;
    }

    Alert.alert("Dados atualizados com sucesso!");
  }

  return (
    <View style={styles.wrapperContainer}>
      <View style={styles.form}>
        <View style={styles.labelInput}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            onChangeText={setName}
            value={name}
            style={styles.inputField}
          />
        </View>

        <View style={styles.labelInput}>
          <Text style={styles.label}>Telefone</Text>
          <TextInput
            onChangeText={setPhone}
            value={phone}
            style={styles.inputField}
          />
        </View>

        <View style={styles.labelInput}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            onChangeText={setEmail}
            value={email}
            style={styles.inputField}
          />
        </View>

        <View style={styles.labelInput}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            onChangeText={setPassword}
            value={password}
            style={styles.inputField}
            secureTextEntry
          />
        </View>

        <TouchableOpacity onPress={handleUpdateUser} style={styles.btnUpdate}>
          <Text style={styles.btnTextUpdate}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
