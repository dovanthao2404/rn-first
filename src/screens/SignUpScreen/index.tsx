import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { TextField } from "../../components/TextField";
import { CommonButton } from "../../components/CommonButton";
import { KeyboardAvoiding } from "../../components/KeyboardAvoiding";
import { confirmSignUp, signUp } from "aws-amplify/auth";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type SignUpParameters = {
  username: string;
  password: string;
  email: string;
};
export const SignUpScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

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
  async function handleSignUp({ username, password, email }: SignUpParameters) {
    try {
      const { isSignUpComplete, userId, nextStep } = await signUp({
        username,
        password,
        options: {
          userAttributes: {
            email,
          },
        },
      });
      console.log({ isSignUpComplete, userId, nextStep });
      navigation.replace("ConfirmSignUp", { username});
    } catch (error) {}
  }
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
        <CommonButton
          title="Sign Up"
          width={"100%"}
          onPress={() => {
            handleSignUp(form);
          }}
        />
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
