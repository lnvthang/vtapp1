// src/components/FancyButton.tsx
import React from "react";
import { Pressable, Text, StyleSheet, ViewStyle } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  style?: ViewStyle | ViewStyle[];
};

export default function FancyButton({ label, onPress, variant = "primary", style }: Props) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.base, variant === "secondary" ? styles.secondary : styles.primary, pressed && styles.pressed, style]}>
      <Text style={variant === "secondary" ? styles.secondaryText : styles.primaryText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: { height: 48, borderRadius: 10, alignItems: "center", justifyContent: "center", paddingHorizontal: 16, minWidth: 220 },
  primary: { backgroundColor: "#1f7aec" },
  primaryText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  secondary: { backgroundColor: "#e5e7eb" },
  secondaryText: { color: "#111827", fontWeight: "700", fontSize: 16 },
  pressed: { opacity: 0.9 },
});
