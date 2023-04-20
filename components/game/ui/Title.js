import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import  Colors  from '../../costanti/colors'



const Title = ({children}) => {
  return (
    <View style={styles.title_container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  )
}

export default Title

const styles=StyleSheet.create({

    title_container:{
        padding:30
    },

    title:{
        fontSize:24,
        color:'red',
        borderWidth:2,
        borderColor:Colors.border800,
        borderRadius:8,
        textAlign:'center',
        fontWeight:'bold',
        

    }
})