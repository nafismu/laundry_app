import * as React from 'react'
import { View,Text,StyleSheet,Dimensions, Touchable, TouchableOpacity, Image } from 'react-native'
import { TextInput } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react'; 

const { width } = Dimensions.get('window');
export default function LoginScreen() {
    const [password, setPassword] = useState(''); 
  
    // State variable to track password visibility 
    const [showPassword, setShowPassword] = useState(false); 
  
    // Function to toggle the password visibility state 
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    }; 
  return (
    <View style={Style.container}>
      <View style={{justifyContent:'center',alignItems:'center',marginTop:-50}}>
        <Image
        source={require('../assets/login.png')}
        style={{width:120,height:120}}/>
      </View>
      <Text style={{fontSize:20,marginBottom:30,marginTop:20,fontWeight:'bold'}}>
        Welcome In Login
      </Text>
      <View>
        <View>
          <TextInput
          placeholder='Email'
          style={{height: 50,width:width-40, borderColor: 'gray',backgroundColor:'white', borderWidth: 1,borderTopEndRadius:20,borderTopStartRadius:20,borderBottomEndRadius:20,borderBottomStartRadius:20}}
          underlineColor='transparent'>
          </TextInput>
        </View>
        <View>
          <TextInput
          keyboardType='invisible-password'
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={newText =>setPassword(newText)}
          placeholder='Password'
          underlineColor='transparent'
          style={{height: 50,width:width-40, borderColor: 'gray',backgroundColor:'white', borderWidth: 1,marginTop:20,borderTopEndRadius:20,borderTopStartRadius:20,borderBottomEndRadius:20,borderBottomStartRadius:20,}}
          />
          <MaterialCommunityIcons
          name={showPassword ? "eye" : "eye-off"}
          size={24}
          color="black"
          style={{position:'absolute',right:20,top:35}}
          onPress={toggleShowPassword}
          />
          
        </View>
        <View>
          <TouchableOpacity>
            <Text style={{marginTop:50,marginBottom:30,fontSize:20,fontWeight:'bold',textAlign:'center', backgroundColor:'pink',color:'white',padding:10,borderRadius:20}}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{borderBottomWidth:1,borderColor:'gray',alignContent:'center',alignItems:'center'}}>
          <View style={{backgroundColor:'white',width:50,height:50,top:25}}>
          <Text style={{fontSize:15,fontWeight:'light',textAlign:'center',position:'relative',top:10}}>Or</Text>
          </View>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',marginTop:40,direction:'row'}}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:200}}>
            <View style={{backgroundColor:'white',width:50,height:50,borderRadius:50,alignItems:'center',justifyContent:'center'}}>
              <Image source={require('../assets/google.png')} style={{width:40,height:40}}/>
            </View>
            <View style={{backgroundColor:'white',width:50,height:50,borderRadius:50,alignItems:'center',justifyContent:'center'}}>
              <Image source={require('../assets/facebook.png')} style={{width:40,height:40}}/>
            </View>
            <View style={{backgroundColor:'white',width:50,height:50,borderRadius:50,alignItems:'center',justifyContent:'center'}}>
              <Image source={require('../assets/apple.png')} style={{width:40,height:40}}/>
            </View>
          </View>
        <Text style={{top:40}}>Dont Have an Account ? <Text style={{color:'blue'}}>Sign Up</Text></Text>
        </View>
      </View>
    </View>
  )
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
