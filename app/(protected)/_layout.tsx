import { Redirect, Stack } from "expo-router";

const isProtected = false;

export default function ProtectedLayout() {
  if (isProtected) {
    return <Redirect href='/+not-found'/>;
  }

  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
    </Stack>
  );
}
