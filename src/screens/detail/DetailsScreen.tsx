// src/screens/DetailsScreen.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import FancyButton from "../../components/FancyButton";
import Spacer from "../../components/Spacer";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function DetailsScreen({ navigation, route }: Props) {
  const { itemId, note } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details</Text>
      <Text style={styles.text}>Item ID: {itemId}</Text>
      <Text style={styles.text}>Note: {note ?? "(none)"} </Text>

      <Spacer h={12} />
      <FancyButton label="Go back" onPress={() => navigation.goBack()} />
      <Spacer h={8} />
      <FancyButton label="Go Home (replace)" variant="secondary" onPress={() => navigation.replace("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 12 },
  text: { fontSize: 16, marginVertical: 4 },
});
 