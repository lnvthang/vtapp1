// src/screens/HomeScreen.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import FancyButton from "../../components/FancyButton";
import Spacer from "../../components/Spacer";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation, route }: Props) {
  const username = route.params?.username ?? "Guest";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, {username}</Text>

      <FancyButton
        label="Go to Details (item 42)"
        onPress={() => navigation.navigate("Details", { itemId: 42, note: "Sent from Home" })}
      />
      <Spacer h={8} />
      <FancyButton label="Log out" variant="secondary" onPress={() => navigation.reset({ index: 0, routes: [{ name: "Login" }] })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 16 },
});
