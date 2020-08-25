import React from 'react'
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native'

export default function Forecast(props){
    let img = "";
    if (props.name == "Hat Yai") {
      img = require("../hatyai.jpg");
    }
    if (props.name == "Trang") {
      img = require("../trang.jpg");
    }
    if (props.name == "Chiang Mai") {
      img = require("../chiangmai.jpg");
    }
    if (props.name == "Khon Kaen") {
      img = require("../khonkaen.jpg");
    }
    if (props.name == "Chonburi") {
      img = require("../chonburi.jpg");
    }
 
    return(
        <View>
            <Text  style={styles.Text}>{props.main}</Text>
            <Text  style={styles.Text}>{props.description}</Text>
            <Text  style={styles.Text}>{props.temp}°C</Text>
            <Text style={styles.Text}> Feel like: {props.feels_like} °C</Text>
        </View>
        
    )
}
const styles = StyleSheet.create({
  
   Text: {
    flexDirection:'row',
    justifyContent:'space-between' ,
    textAlign:'center',
    fontSize:25,
    color:'#fff',    
   
      }
}
);