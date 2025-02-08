import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Authlayout = () => {
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default Authlayout;
