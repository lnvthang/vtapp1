import React, { useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  View,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { s } from "./OTPScreen.styles";
import Toast from "react-native-toast-message";

type Props = NativeStackScreenProps<RootStackParamList, "OTP">;

export default function OTPScreen({ route, navigation }: Props) {
  const { username } = route.params;
  const [otp, setOtp] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onOtpSubmit = async () => {
    if (!otp) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Missing OTP",
        text2: "Please input the OTP sent to your phone.",
      });
      return;
    }

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000)); // Simulating OTP validation process
    setSubmitting(false);

    if (otp === "123456") {
      Toast.show({
        type: "success",
        position: "top",
        text1: "OTP Verified",
        text2: "You have successfully logged in.",
      });

      // Navigate to home screen after OTP verification
      navigation.replace("Home", { username });
    } else {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Incorrect OTP",
        text2: "The OTP you entered is incorrect. Please try again.",
      });
    }
  };

  return (
    <View style={s.wrapper}>
      <Text style={s.title}>Enter OTP</Text>

      <Text style={s.label}>Enter OTP sent to your phone</Text>
      <TextInput
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
        style={s.input}
        maxLength={6} // Assuming OTP is 6 digits
      />

      <Pressable
        onPress={onOtpSubmit}
        style={({ pressed }) => [s.primaryBtn, pressed && s.btnPressed]}
        disabled={submitting}
      >
        {submitting ? (
          <ActivityIndicator />
        ) : (
          <Text style={s.primaryBtnText}>Verify OTP</Text>
        )}
      </Pressable>
    </View>
  );
}
