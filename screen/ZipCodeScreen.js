 import React from 'react'
import { FlatList, View, Text, StatusBar, StyleSheet, ImageBackground} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110', pic: require("../hatyai.jpg") },
    { place: 'Trang', code: '92000', pic: require("../trang.jpg") },
    { place: 'Chiangmai', code: '50000',pic: require("../chiangmai.jpg") },
    { place: 'Khonkaen', code: '40000',pic: require("../khonkaen.jpg" )},
    { place: 'Chonburi', code: '20000',pic: require("../chonburi.jpg" )},
]
   

const ZipItem = ({place, code, navigation,pic}) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code})}>
    <View >
    <ImageBackground source={pic} style={styles.backdrop}></ImageBackground>
    <Text style={styles.Text}>{place}</Text>
    <Text style={styles.Text}>{code}</Text>
    </View>
    </TouchableHighlight>
    )
    const _keyExtractor = item => item.code
    export default function ZipCodeScreen(){
     const navigation = useNavigation()
     return (
     <View >
     <FlatList
     data={availableZipItems}
     keyExtractor={_keyExtractor}
     renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
     />
     <StatusBar style="auto" />
     </View>
     );
    
    }
    const styles = StyleSheet.create({
        backdrop: {
          flexDirection: "column",
          alignItems: "center",
          width: 415,
          height: 100,
        },
       Text: {
        flexDirection:'row',
        justifyContent:'space-between' ,
        textAlign:'center',
        fontSize:20,
        color:'red',    
       
          },
    }
    );
    