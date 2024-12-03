import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { colors } from "../Global/colors";
import { useSignupMutation } from "../app/services/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/SignUpSchema";

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();
  const [triggerSignup, { data, isError, isSuccess, error, isLoading }] =
    useSignupMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  useEffect(() => {
    if (isSuccess) dispatch(setUser(data));
    if (isError) console.log(error);
  }, [data, isError, isSuccess]);

  const onSubmit = () => {
    try {
      signupSchema.validateSync({ email, password, confirmPassword });
      triggerSignup({ email, password });
    } catch (error) {
      console.log(error.path);
      console.log(error.message);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/bg/ImageBG.jpg")}
      style={styles.containerIMG}
    >
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.title}>Sign up</Text>
          <InputForm
            label="Email"
            value={email}
            onChangeText={(t) => setEmail(t)}
            isSecure={false}
            error=""
          />
          <InputForm
            label="Password"
            value={password}
            onChangeText={(t) => setPassword(t)}
            isSecure={true}
            error=""
          />
          <InputForm
            label="Confirm password"
            value={confirmPassword}
            onChangeText={(t) => setConfirmPassword(t)}
            isSecure={true}
            error=""
          />
          <SubmitButton title="Send" onPress={onSubmit} />
          <Text style={styles.sub}>Alredy have an account?</Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.subLink}>Login</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Signup;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    backgroundColor: colors.backPrimary,
    opacity: 0.8,
    gap: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    color: colors.colorFont,
  },
  containerIMG: {
    flex: 1,
    resizeMode: "cover", // o 'contain' según tus necesidades
  },
  title: {
    fontSize: 42,
    fontWeight:"400",
    letterSpacing: 1,
  },
  sub: {
    fontSize: 14,
  },
  subLink: { 
    fontSize: 14,
    color: "blue",
  },
});
