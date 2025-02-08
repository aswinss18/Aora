import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const Signin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};

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
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles={{ marginTop: 40 }}
            isLoading={isSubmitting}
          />
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}>Don't have account?</Text>
            <Link style={styles.link} href="/sign-up">
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  safeArea: { backgroundColor: "#161622", flex: 1 }, // Use flex: 1 instead of height
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    minHeight: "85%", // Remove 'vh' and use percentage or flex
    paddingHorizontal: 30,
    marginVertical: 50,
  },
  img: { width: 115, height: 35 },
  loginText: { fontSize: 22, fontWeight: "600", marginTop: 70, color: "white" },
  bottomContainer: {
    justifyContent: "center",
    paddingTop: 20, // Remove 'px'
    flexDirection: "row",
    gap: 10, // Remove 'px'
  },
  bottomText: { color: "#ccc" },
  link: { color: "orange" },
});
