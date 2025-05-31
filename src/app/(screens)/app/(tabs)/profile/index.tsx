import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const images = [
  "https://img.freepik.com/vetores-premium/imagem-de-perfil-de-avatar-de-homem-isolada-em-fundo-imagem-de-profile-de-avatar-de-homem_1293239-4841.jpg?semt=ais_hybrid&w=740",
  "https://png.pngtree.com/png-clipart/20240419/original/pngtree-avatar-cartoon-in-flat-style-png-image_14901533.png",
  "https://cdn-icons-png.flaticon.com/512/5556/5556475.png",
  "https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png",
  "https://img.freepik.com/vetores-gratis/ilustracao-do-jovem-sorridente_1308-174669.jpg?semt=ais_items_boosted&w=740",
  "https://files.shapes.inc/avatar_bf1beb5c-0473-4a31-a453-c19f02a1d65c.png",
];

export default function ProfileScreen() {
  const [imageUri, setImageUri] = useState(images[0]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  useFocusEffect(
    useCallback(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setImageUri(images[randomIndex]);
    }, [])
  );

  return (
    <View style={styles.wrapperContainer}>
      <View style={styles.wrapperImage}>
        <Image source={{ uri: imageUri }} style={styles.img} />
      </View>

      <View style={styles.form}>
        <View style={styles.labelInput}>
          <Text style={styles.label}>Nome</Text>
          <TextInput style={styles.inputField} />
        </View>

        <View style={styles.labelInput}>
          <Text style={styles.label}>Telefone</Text>
          <TextInput style={styles.inputField} />
        </View>

        <View style={styles.labelInput}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.inputField} />
        </View>

        <TouchableOpacity style={styles.btnUpdate}>
          <Text style={styles.btnTextUpdate}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
