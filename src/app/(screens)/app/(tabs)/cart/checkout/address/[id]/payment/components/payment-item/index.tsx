import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./styles";

interface PaymentItemProps {
  name: keyof typeof icons;
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

export function PaymentItem({ name }: PaymentItemProps) {
  const [isSelected, setIsSelected] = useState(false);

  const { icon, label } = icons[name];

  return (
    <Pressable
      style={{
        ...styles.container,
        backgroundColor: isSelected ? colors.primary : "transparent",
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
          color: isSelected ? colors.background : colors.white,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
