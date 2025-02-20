import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "../../src/firebase/firebaseConfig";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";
import { LinearGradient } from "expo-linear-gradient";

const SignUpScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullname, setFullname] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const router = useRouter();

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password); // Firebase signUp
      router.push("./login");

      // Show success toast
      Toast.show({
        type: "success",
        text1: "Signed up successfully!",
        text2: "Redirecting to Login...",
      });
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Error Password too short | Passwords do not match",
      });
    }
  };

  return (
    <LinearGradient
      colors={["#1E3A8A", "#3B82F6"]} // From dark blue to light blue
      start={{ x: 0, y: 0 }} // Starting from the left
      end={{ x: 1, y: 0 }} // Ending at the right
      className="flex-1 flex-col items-start justify-end"
    >
      <View className="w-full h-full justify-end">
        <View className="flex flex-col gap-2 my-10">
          <Text className="text-3xl  mx-4 font-semibold text-white top-0 ">
            Create Your
          </Text>
          <Text className="text-5xl mx-4 font-semibold text-white top-0 ">
            Account
          </Text>
        </View>
        {/* <View className="w-14 h-14 bg-white mt-"></View> */}
        <View className="flex flex-col items-center justify-center gap-6 h-[70%] w-[100%] p-5 py-10 bg-white bottom-0 rounded-tr-[4rem] nt-10">
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullname}
            onChangeText={setFullname}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity style={styles.button} onPress={signUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="text-end "
            onPress={() => router.navigate("./login")}
          >
            <Text
              style={{
                color: "#007BFF",
                fontSize: 18,
                textAlign: "right",
                translateX: 20,
              }}
            >
              {"Sign In "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  input: {
    width: "95%",
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  button: {
    width: "95%",
    height: 50,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignUpScreen;
