import { StyleSheet } from "react-native";
import normalizeStyles from "./normalizeStyles";

export const s = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: normalizeStyles.Spacing.medium,
    backgroundColor: normalizeStyles.Colors.white,
  },
  title: {
    ...normalizeStyles.Typography.h1,
    marginBottom: normalizeStyles.Spacing.large,
    color: normalizeStyles.Colors.primary,
  },
  label: {
    ...normalizeStyles.Typography.body,
    marginBottom: normalizeStyles.Spacing.small,
    color: normalizeStyles.Colors.darkGrey,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: normalizeStyles.Colors.lightGrey,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: normalizeStyles.Spacing.medium,
    marginBottom: normalizeStyles.Spacing.large,
    fontSize: 16,
    color: normalizeStyles.Colors.black,
  },
  primaryBtn: {
    backgroundColor: normalizeStyles.Colors.primary,
    paddingVertical: normalizeStyles.Spacing.small,
    paddingHorizontal: normalizeStyles.Spacing.large,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  primaryBtnText: {
    fontWeight: "500",
    color: normalizeStyles.Colors.white,
  },
  btnPressed: {
    opacity: 0.7,
  },
});
