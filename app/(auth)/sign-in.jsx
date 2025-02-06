import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";

const Signin = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.img} source={images.logo} resizeMode="contain" />
          <Text style={styles.loginText}>Log in to Aora</Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            keyboardType="email-address"
            otherStyles={{ marginTop: 30 }}
          />{" "}
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={{ marginTop: 30 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  safeArea: { backgroundColor: "#161622", height: "100%" },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    minHeight: "85vh",
    paddingHorizontal: 30,
    marginVertical: 50,
  },
  img: { width: 115, height: 35 },
  loginText: { fontSize: 22, fontWeight: 600, marginTop: 70, color: "white" },
});
