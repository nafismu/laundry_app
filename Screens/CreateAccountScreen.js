import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TextInput } from "react-native-paper";

export default function CreateAccountScreen() {
  const { width } = Dimensions.get("window");
  const [password, setPassword] = useState("");

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={style.container}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
            marginTop: 50,
            marginLeft: 20,
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10 }}>
            Hey, Hello
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "normal" }}>
            Silahkan untuk{" "}
            <Text style={{ fontWeight: "bold" }}>Membuat Akun</Text> untuk akses
            aplikasinya
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              width: 150,
              borderWidth: 1,
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
              borderColor: "gray",
            }}
          >
            <Image
              source={require("../assets/google.png")}
              style={{
                width: 50,
                height: 50,
                justifyItems: "flex-start",
                marginRight: 10,
              }}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Google</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            gap: 20,
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              width: 160,
              borderWidth: 1,
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
              borderColor: "gray",
            }}
          >
            <Image
              source={require("../assets/facebook.png")}
              style={{
                width: 40,
                height: 40,
                justifyItems: "flex-start",
                marginLeft: 5,
                marginRight: 10,
              }}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              width: 150,
              borderWidth: 1,
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
              borderColor: "gray",
            }}
          >
            <Image
              source={require("../assets/apple.png")}
              style={{
                width: 40,
                height: 40,
                justifyItems: "flex-start",
                marginLeft: 10,
                marginRight: 10,
              }}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Apple</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "gray",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{ backgroundColor: "white", width: 50, height: 50, top: 25 }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "light",
                textAlign: "center",
                position: "relative",
                top: 10,
              }}
            >
              Atau
            </Text>
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: 40, gap: 20 }}>
          <Text
            style={{
              marginLeft: -280,
              marginBottom: -10,
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Nama
          </Text>
          <TextInput
            style={{
              height: 50,
              width: width - 40,
              borderColor: "gray",
              backgroundColor: "white",
              borderWidth: 1,
              borderTopEndRadius: 20,
              borderTopStartRadius: 20,
              borderBottomEndRadius: 20,
              borderBottomStartRadius: 20,
            }}
            underlineColor="transparent"
          />
          <Text
            style={{
              marginLeft: -280,
              marginBottom: -10,
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Email
          </Text>
          <TextInput
            style={{
              height: 50,
              width: width - 40,
              borderColor: "gray",
              backgroundColor: "white",
              borderWidth: 1,
              borderTopEndRadius: 20,
              borderTopStartRadius: 20,
              borderBottomEndRadius: 20,
              borderBottomStartRadius: 20,
            }}
            underlineColor="transparent"
          />
          <Text
            style={{
              marginLeft: -280,
              marginBottom: -10,
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Sandi
          </Text>
          <View>
          <TextInput
          keyboardType='invisible-password'
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={newText =>setPassword(newText)}
          underlineColor='transparent'
          style={{height: 50,width:width-40, borderColor: 'gray',backgroundColor:'white', borderWidth: 1,borderTopEndRadius:20,borderTopStartRadius:20,borderBottomEndRadius:20,borderBottomStartRadius:20,}}
          />
          <MaterialCommunityIcons
          name={showPassword ? "eye" : "eye-off"}
          size={24}
          color="black"
          style={{position:'absolute',right:20,top:15}}
          onPress={toggleShowPassword}
          />
          
        </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
