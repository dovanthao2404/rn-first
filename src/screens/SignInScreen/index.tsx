import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { TextField } from "../../components/TextField";
import { CommonButton } from "../../components/CommonButton";
import { SignInInput, signIn } from "aws-amplify/auth";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userState } from "../../globalState/userState";

export const SignInScreen = () => {
  const setUserStateValue = useSetRecoilState(userState);
  const [form, setForm] = React.useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });

  const handleChange = (name: string) => (value: string) => {
    setForm((form) => ({ ...form, [name]: value }));
  };
  async function handleSignIn({ username, password }: SignInInput) {
    try {
      const result = await signIn({
        username,
        password,
        options: {
          authFlowType: "USER_PASSWORD_AUTH",
        },
      });
      console.log(result)
      setUserStateValue({ isLoggedIn: true });
    } catch (error) {

      setUserStateValue({ isLoggedIn: false });
    }
  }
  return (
    <>
      <View>
        <Text style={[styles.title]}>Sign In</Text>
      </View>
      <View style={[styles.inputWrapper]}>
        <View>
          <TextField
            placeholder="Username"
            onChangeText={handleChange("username")}
          />
        </View>
        <View>
          <TextField
            placeholder="Password"
            onChangeText={handleChange("password")}
          />
        </View>
      </View>
      <View style={[styles.signInBtn]}>
        <CommonButton
          onPress={() => {
            handleSignIn(form);
          }}
          title="Sign In"
          width={"100%"}
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
