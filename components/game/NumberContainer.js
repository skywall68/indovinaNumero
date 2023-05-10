import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from './../costanti/colors'

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles=StyleSheet.create({
    container:{
        borderRadius:4,
        borderWidth:4,
        borderColor:Colors.border800,
        padding:24,
        margin:24,
        alignItems:'center',
        justifyContent:'center',


    },
    numberText:{
        color:'white',
        fontSize:36,
        //fontWeight:'bold'
        fontFamily:'open-sans-bold',
    }
})