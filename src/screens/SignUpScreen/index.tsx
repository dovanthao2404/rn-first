import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { TextField } from "../../components/TextField";
import { CommonButton } from "../../components/CommonButton";
import { KeyboardAvoiding } from "../../components/KeyboardAvoiding";

export const SignUpScreen = () => {
  const [form, setForm] = React.useState<{
    username: string;
    password: string;
    email: string;
  }>({
    username: "",
    password: "",
    email: "",
  });
  const handleChange = (name: string) => (value: string) => {
    setForm((form) => ({ ...form, [name]: value }));
  };
  console.log(form);

  return (
    <>
      <View>
        <Text style={[styles.title]}>Sign Up</Text>
      </View>
      <View style={[styles.inputWrapper]}>
        <View>
          <TextField
            placeholder="Enter Email"
            onChangeText={handleChange("email")}
          />
        </View>
        <View>
          <TextField
            placeholder="Enter Username"
            onChangeText={handleChange("username")}
          />
        </View>
        <View>
          <TextField
            placeholder="Enter Password"
            onChangeText={handleChange("password")}
          />
        </View>
      </View>
      <View style={[styles.signInBtn]}>
        <CommonButton title="Sign Up" width={"100%"} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: Colors.COLOR_000000,
    fontSize: 24,
    fontWeight: "bold",
  },
  inputWrapper: {
    rowGap: 20,
    marginTop: 30,
  },
  signInBtn: {
    marginTop: 30,
  },
});
