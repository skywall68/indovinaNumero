import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/game/ui/PrimaryButton";
import Colors from '../components/costanti/colors'
import Title from "../components/game/ui/Title";
import Card from "../components/game/ui/Card";
import InstructionText from "../components/game/ui/InstructionText";
//CREIAMO IL PRIMO SCHERMO CON UN TEXTINPUT E 2 BUTTONS CHE ANDIAMO A CREAre noi per meglio personalizzarli

const StartGameScreen = ({prendiNumero})=>{
    const[enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText){
     setEnteredNumber(enteredText); //catturiamo il valore di testo che va poi convertito in numero
    }

    function resetInputHandler(){
       setEnteredNumber(''); 
    }

    function confirmInputHandler(){
      
      const numeroInserito = parseInt(enteredNumber);
      //validiamo il numero inserito
      if(isNaN(numeroInserito) || numeroInserito <= 0 || numeroInserito > 99){
        //visualizzo un messaggio che il numero inserito non è corretto
        Alert.alert('Numero non valido',
                    'Il numero deve essere tra 1 e  99',
                    [{ text:'Okay', style:'destructive', onPress:resetInputHandler }]
        )
        return; //esce dalla funzione
      }
      setEnteredNumber(numeroInserito.toString())
      console.log('Valore inserito:', enteredNumber)
      //prendiamo il numero e lo portiamo nell' App.js con la funzione:
      prendiNumero(enteredNumber)

      resetInputHandler();
    }

return (
    <Card style={styles.Container}>
        <Title>Scopri il Mio Numero</Title>
        <View style={styles.inputContainer}>
             <InstructionText>GIOCA:</InstructionText> 
            <TextInput style={styles.numberInput} 
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={numberInputHandler}  //mi chiama la funzione al cambiamento del text
            value={enteredNumber}
              />
             <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confermi</PrimaryButton>
                </View>
            
            
            </View> 
        </View>
        
        
    </Card>
)
}

export default StartGameScreen;

const styles = StyleSheet.create({

      
      
      Container: {
       
       marginTop:50,
       marginHorizontal:50,
       padding:16,
       backgroundColor:'#72063c',
       borderRadius:8,
       elevation:5,
       // per ios usare l'ombra:
       shadowColor:'black',
       shadowOffset:{ width:0, height:3},
       shadowOpacity:0.30,
       shadowRadius:6,
  
    },
    inputContainer:{
      alignItems:'center',
    },
    testo:{
        color:'yellow',

    },
    //definiamo le proprietà del campo input:
    /*ALTEZZA-LARGHEZZA-COLORE BORDO-SPESSORE BORDO-DIMENSIONE TESTO- COLORE TESTO- TIPO TESTO- 
    TESTO CENTRATO - MARGINE */ 
    
    numberInput:{
        height:50,
        width:50,
        borderColor:Colors.accent500,
        borderWidth:2,
        fontSize:32,
        color:'yellow',
        fontWeight:'bold',
        textAlign:'center',
        marginVertical:8,
    },

     buttonsContainer:{
        flexDirection:'row',
        borderColor:'blue',
        borderWidth:2,
    },

    buttonContainer:{
        flex:1,
        borderColor:'yellow',
        borderWidth:1,
        
        
        
    }

  });