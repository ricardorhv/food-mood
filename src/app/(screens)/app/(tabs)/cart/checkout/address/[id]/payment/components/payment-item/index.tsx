import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";
import { styles } from "./styles";

interface PaymentItemProps {
  id: string;
  name: keyof typeof icons;
  onSelect: (id: string) => void;
  isSelected: boolean;
}

const icons = {
  CREDIT_CARD: {
    label: "Cartão de crédito",
    icon: "credit-card",
  },
  DEBIT_CARD: {
    label: "Cartão de débito",
    icon: "credit-card",
  },
  IN_CASH: {
    label: "Dinheiro",
    icon: "attach-money",
  },
  PIX: {
    label: "PIX",
    icon: "pix",
  },
} as const;

export function PaymentItem({
  id,
  name,
  onSelect,
  isSelected,
}: PaymentItemProps) {
  const { icon, label } = icons[name];

  function handleSelectPaymentItem() {
    onSelect(id);
  }

  return (
    <Pressable
      onPress={handleSelectPaymentItem}
      style={{
        ...styles.container,
        backgroundColor: isSelected ? colors.primary : "transparent",
        borderColor: isSelected ? colors.primary : colors["gray-400"],
      }}
    >
      <MaterialIcons
        name={icon}
        size={28}
        color={isSelected ? colors.background : colors.white}
      />
      <Text
        style={{
          ...styles.text,
          color: isSelected ? colors.background : colors["gray-400"],
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
