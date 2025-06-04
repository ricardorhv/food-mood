import { colors } from "@/styles/colors";
import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";

interface LoadingIndicatorProps {
  size: "small" | "large";
}

export function LoadingIndicator({ size }: LoadingIndicatorProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={colors.orange} />
    </View>
  );
}
