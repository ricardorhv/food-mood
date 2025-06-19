import { useAddressContext } from "@/context/address-context";
import { createAddress } from "@/services/address/address-service";
import { colors } from "@/styles/colors";
import { UserAddress } from "@/types/address";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, Modal, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

interface AddNewAddressModalProps {
  open: boolean;
  closeModal: () => void;
}

export function AddNewAddressModal({
  closeModal,
  open,
}: AddNewAddressModalProps) {
  const [address, setAddress] = useState<UserAddress>({} as UserAddress);
  const { addNewAddress } = useAddressContext();

  async function handleAddNewAddress() {
    const { success, data } = await createAddress(address);

    if (!success) {
      Alert.alert("Erro ao cadastrar endereço, revise os dados!");
      return;
    }

    addNewAddress(address);
    closeModal();
  }

  return (
    <Modal animationType="slide" visible={open} onRequestClose={closeModal}>
      <View style={styles.container}>
        <Pressable style={styles.closeBtn} onPress={closeModal}>
          <Ionicons name="close" size={24} color={colors["red-light"]} />
        </Pressable>

        <Text style={styles.title}>Cadastre seu endereço</Text>

        <View style={styles.formContainer}>
          <TextInput
            placeholderTextColor={colors["gray-600"]}
            placeholder="Título"
            style={styles.input}
            onChangeText={(text) =>
              setAddress((prevState) => {
                return {
                  ...prevState,
                  name: text,
                };
              })
            }
          />
          <TextInput
            placeholderTextColor={colors["gray-600"]}
            placeholder="Rua"
            style={styles.input}
            onChangeText={(text) =>
              setAddress((prevState) => {
                return {
                  ...prevState,
                  street: text,
                };
              })
            }
          />
          <TextInput
            placeholderTextColor={colors["gray-600"]}
            placeholder="Bairro"
            style={styles.input}
            onChangeText={(text) =>
              setAddress((prevState) => {
                return {
                  ...prevState,
                  neighborhood: text,
                };
              })
            }
          />
          <TextInput
            placeholderTextColor={colors["gray-600"]}
            placeholder="Número"
            style={styles.input}
            onChangeText={(text) =>
              setAddress((prevState) => {
                return {
                  ...prevState,
                  houseNumber: text,
                };
              })
            }
          />
          <TextInput
            placeholderTextColor={colors["gray-600"]}
            placeholder="Cidade"
            style={styles.input}
            onChangeText={(text) =>
              setAddress((prevState) => {
                return {
                  ...prevState,
                  city: text,
                };
              })
            }
          />
          <TextInput
            placeholderTextColor={colors["gray-600"]}
            placeholder="Estado"
            style={styles.input}
            onChangeText={(text) =>
              setAddress((prevState) => {
                return {
                  ...prevState,
                  state: text,
                };
              })
            }
          />

          <Pressable
            onPress={handleAddNewAddress}
            style={styles.addNewAddressBtn}
          >
            <Text style={styles.addNewAddressText}>Cadastrar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
