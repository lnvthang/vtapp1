import React, { useState } from "react";
import {
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { s } from "./LoginScreen.styles";
import FancyButton from "../../components/FancyButton";
import Spacer from "../../components/Spacer";
import Toast from "react-native-toast-message";
import OTP from "../otp/OTPScreen";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onLoginPress = async () => {
    // Input validation
    if (!username) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Missing username",
        text2: "Please input username or email.",
      });
      return;
    }
    if (!password) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Missing password",
        text2: "Please input your password.",
      });
      return;
    }

    // Check credentials
    if (username !== "admin" || password !== "1") {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Incorrect login",
        text2: "Username or password is incorrect.",
      });
      return;
    }

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);

    // Successful login, navigate to OTP screen
    Toast.show({
      type: "success",
      position: "top",
      text1: "Login Successful",
      text2: "Welcome back, " + username,
    });

    navigation.replace("OTP", { username });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ ios: "padding", android: undefined })}
      style={s.wrapper}
    >
      <View style={[s.container, s.backgroundColorLoginScreen]}>
        <Text style={s.title}>Student App</Text>

        <View style={s.form}>
          <Text style={s.label}>Username or email</Text>
          <TextInput
            placeholder="Input username or email"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="username"
            style={s.input}
          />

          <Text style={[s.label, s.mt12]}>Password</Text>
          <TextInput
            placeholder="Input password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            textContentType="password"
            style={s.input}
          />

          <Pressable
            onPress={onLoginPress}
            style={({ pressed }) => [s.primaryBtn, pressed && s.btnPressed]}
            disabled={submitting}
          >
            {submitting ? (
              <ActivityIndicator />
            ) : (
              <Text style={s.primaryBtnText}>Login</Text>
            )}
          </Pressable>

          <Spacer h={12} />
          <FancyButton
            label="Login with Microsoft"
            onPress={() => Alert.alert("Info", "Login with Microsoft")}
          />
        </View>
      </View>
      <Toast />
    </KeyboardAvoidingView>
  );
}
