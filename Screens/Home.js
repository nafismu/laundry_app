import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CarouselCards from './carousel/CarouselCards';
import Card from './Card';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import {navigation} from './Card1';
import Card1 from './Card1';
export default function Home() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });
  
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.leftContainer}>
          <View style={{marginTop:70,flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end',gap:20, marginEnd:20}}>
          <View style={{marginHorizontal:70,alignItems:'flex-start',justifyContent:'flex-start'}}>
          <Text style={[{fontSize:20,fontWeight:'bold',fontFamily:'Poppins_400Regular'}]}>Selamat Pagi,</Text>
          <Text style={[{fontSize:20,fontFamily:'Poppins_400Regular'}]}>Alen</Text>
          </View>
          <View style={styles.icon_bell}>
              <TouchableOpacity>
                <Icon name="bell" size={30} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.icon_user}>
              <TouchableOpacity>
                <Icon name="user" size={30} color="black" />
              </TouchableOpacity>
            </View>
            </View>
        </View>
          <View style={styles.iconRow}>
          <View style={styles.promoContainer}>
            <Text style={styles.promoText}>Promo</Text>
            <Text style={styles.promoLink}>Lihat Semua</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row',justifyContent:'center' ,marginLeft:0,marginTop:30}}>
            <SafeAreaView>
          <CarouselCards style={[styles.carousel,styles.shadowProp]}/>
            </SafeAreaView>
        </View>
        <Card/>
      <View style={styles.rightContainer}>
      </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f0eee9",
    fontFamily: "Poppins_400Regular",
    
  },
  leftContainer: {
    flex: 2,
    justifyContent: "flex-start",
  },
  rightContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginTop: 50,
    marginEnd: 20,
  },
  textContainer: {
    marginTop: 50,
    marginHorizontal: 20,
    gap: 1,
    fontFamily: "Poppins_400Regular",
  },
  greetingText: {
    fontSize: 60,
    fontWeight: "700",
    fontFamily: "Poppins_400Regular",
  },
  nameText: {
    fontSize: 60,
    fontWeight: "700",
    fontFamily: "Poppins_400Regular",
  },
  promoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginLeft: 30,
  },
  promoText: {
    fontSize: 20,
    fontWeight: "heavy",
    marginRight: 80,
    fontFamily: "Poppins_400Regular",
  },
  promoLink: {
    fontSize: 15,
    marginLeft: 100,
    color: "#db65cc",
  },
  iconContainer: {
    elevation: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  iconRow: {
    flexDirection: "row",
    gap: 20,
  },
  icon_bell: {
    width: 50,
    height: 50,
    backgroundColor: "#d1cec5",
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
    elevation: 5,
  },icon_user:{
    
    width: 50,
    height: 50,
    backgroundColor: "#d1cec5",
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
    elevation: 5,
  },
  carousel:{
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
