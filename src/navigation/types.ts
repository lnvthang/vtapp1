export type RootStackParamList = {
  Login: undefined;
  Home: { username?: string } | undefined;
  Details: { itemId: number; note?: string };
  OTP: { username: string }; 
};