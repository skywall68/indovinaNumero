import { View, StyleSheet, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import Title from '../components/game/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/game/ui/PrimaryButton'
import Card from '../components/game/ui/Card'
import InstructionText from '../components/game/ui/InstructionText'

//utility function che crea un numero casuale
function generaNumeroCasuale(min, max, exclude){  //exclude serve per fare in modo che il telefono non indovini subito il numero
  const rndNum = Math.floor(Math.random() * (max - min)) + min

  if (rndNum === exclude) {
    return generaNumeroCasuale(min, max, exclude)
  } else {
    return rndNum
  }
}

let minNumero= 1
let maxNumero= 100



const GameScreen = ({userNumber, onGameOver }) => {
  //chiamiamo la funzione e gli passiamo il min e il max dove max è (max-min) e cioè 99
 
  const inizialGuess = generaNumeroCasuale(1,100, userNumber)
  const [currentGuess, setCurrentGuess]=useState(inizialGuess)

  useEffect(()=>{ //vogliamo controllare se 'currentGuess' è unguale a 'userNumber' in questo caso mi chiama
                  //una funzione che mi indirizza alla nuova schermata
    if(currentGuess === userNumber){ //se il numero è stato indovinato abbiamo finito il gioco
      onGameOver() //funzione che arriva da App.js e dice che il gioco è finito
    }

  },[currentGuess, userNumber, onGameOver]) //ogni volta che una di queste variabili cambia si ripete useEffect

 console.log('errore')
  // creo una funzione che prende un nuovo numero dato dal gioco e verifica se è maggiore o minore del numero da indovinare.
 function nextGuessHandler(direzione){   // direzione= 'maggiore' oppure 'minore' come valori
  if(
       ( direzione === 'minore' && currentGuess < userNumber) || 
      (direzione === 'maggiore' && currentGuess > userNumber)){
    Alert.alert('Non mentire', 'Tu sai che hai sbagliato!!!', [{ text:'Sorry!', style:'cancel'},])
    return
  }
  if ( direzione === 'minore'){
    maxNumero = currentGuess 
      
  } else {
   minNumero = currentGuess + 1 
   }
   
   const newRdmNumero = generaNumeroCasuale(minNumero, maxNumero, currentGuess)//richiamiamo la funzione che rigenera il numero nella direzione che abbiamo assegnato.
   setCurrentGuess(newRdmNumero)
  
}



  return (
    <View style={styles.screen}>
     <Title>Pagina della vittoria</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        
        <InstructionText>Maggiore o Minore?</InstructionText>
        <View>
           <PrimaryButton onPress={nextGuessHandler.bind(this, 'minore')}>-</PrimaryButton>
           <PrimaryButton onPress={nextGuessHandler.bind(this, 'maggiore')}>+</PrimaryButton>
        </View>
      
      </Card>
      <View>
       <InstructionText>Segna punti</InstructionText>
      </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24,
    }
})