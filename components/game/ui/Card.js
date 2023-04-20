import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../costanti/colors'

export default function Card({children}) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({

        card:{
            marginTop:50,
            marginHorizontal:50,
            padding:16,
            backgroundColor:Colors.primary800,
            borderRadius:8,
            elevation:5,
            // per ios usare l'ombra:
            shadowColor:'black',
            shadowOffset:{ width:0, height:3},
            shadowOpacity:0.30,
            shadowRadius:6,
       
        }
})