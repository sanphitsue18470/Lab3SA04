import React, { useState, useEffect } from 'react'
import { Text, ImageBackground, StyleSheet } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){
    
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        feels_like:0,
        temp: 0
    })


    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=7c221e510d4a390ec6665e8790f431f5`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    feels_like:json.main.feels_like,   
                    temp: json.main.temp});
                })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])




    return(
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <Text style={styles.Text}>Zip Code</Text>
            <Text style={styles.Text}>{props.zipCode}</Text>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    Text: {
        
        fontSize:45,
        color:'orange',    
       
          }
    
})