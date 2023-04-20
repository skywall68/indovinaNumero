import { View, Text, StyleSheet, Pressable } from 'react-native';

//Creiamo il primo bottone usando View e Text

const PrimaryButton = ({ children, onPress }) => {

    const pressHandler =()=>{
        console.log('Ha ha mi hai premuto...che male!!!')
        onPress();
        
    }
  return (
    <View style={styles.buttonOuterContainer}>
        <Pressable style={({pressed}) => pressed
         ? [styles.buttonInnerContainer, styles.pressed] 
         : styles.buttonInnerContainer}
        //Se pressed è true(perchè è ios) '?' utilizza i due stili tra [] altrimenti  ':' usa solo lo stile 'buttonInnerContainer'
        onPress={pressHandler} android_ripple={{color:'red'}}>
            <Text style={styles.buttonText}>{children}</Text> 
        </Pressable>
     
    </View>
  )
}

export default PrimaryButton;

const styles=StyleSheet.create({

    buttonOuterContainer:{
        
        flexDirection:'row',
        borderRadius:4,
        margin:4,
        overflow:'hidden',
    },

   buttonInnerContainer:{
    flex:1,
    backgroundColor:'green',
    paddingVertical:5,
    paddingHorizontal:8,
    elevation:4,
    
    
    
    
    
   },

   buttonText:{
    color:'white',
    fontSize:18,
    textAlign:'center',

   },

   //per ios:
   pressed:{
     opacity:0.75,
   }
})