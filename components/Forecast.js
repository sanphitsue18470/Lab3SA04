import React from 'react'
import { View, Text } from 'react-native'

export default function Forecast(porps){
    return(
        <View>
            <Text>{porps.main}</Text>
            <Text>{porps.description}</Text>
            <Text>{porps.temp}</Text>
            <Text>°C</Text>
        </View>
        
    )
}