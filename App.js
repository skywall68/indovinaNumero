import { useState } from 'react';
import { StyleSheet,ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './components/costanti/colors'
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
//prova per file modificato

export default function App() {
 const [useNumber, setUseNumber]=useState() //questo è il numero scelto dall'utente
 const [gameIsOver, setGameIsOver]=useState(true) //questa variabile mi dice se il gioco è finito, inizia 'true'
                                                  //perchè come se fosse finito.
 const [fontsLoaded] = useFonts({
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
 }); //creiamo una funzione dove al suo interno abbiamo un oggetto che carica i fonts  
 
 if(!fontsLoaded){
  return <AppLoading />
 }

 //funzione che mi recupera il numero
 function prendiNumeroHandler(prendiNumero){
  setUseNumber(prendiNumero)
  setGameIsOver(false) //mi dice che è iniziato il gioco
 }

  //creiamo la funzione che mi porta gameIsOver a 'true' e viene passata a GameScreen
 function gameOverHandler(){
  setGameIsOver(true)
 }

 //creiamo una variabile screen dove assegnamo lo schermo di default
 let screen = <StartGameScreen prendiNumero={prendiNumeroHandler} />

 //creiamo la condizione che se vera(number tra 1 e 99) vado nella nuova schermata
 if(useNumber){
  screen=<GameScreen userNumber={useNumber} onGameOver={gameOverHandler}/>
 }

 //creiamo la condizione che se vera mi visualizzi la schermata finale
 if(gameIsOver && useNumber){
  screen=<GameOverScreen />
 } 


  return (
  <LinearGradient colors={[Colors.accent500,Colors.orange100, Colors.primary500]} style={styles.appContainer}>
    <ImageBackground
     source={require('./assets/images/risto1.jpg')} 
     resizeMode="cover" 
     style={styles.appContainer}
     imageStyle={styles.backgroundImage}
     >
      {/* SafeAreaView mi permette di salvare la prima parte dello schermi in alto per non essere scritti */}
      <SafeAreaView style={styles.appContainer}> 
      
        {screen} 
      </SafeAreaView>
     
    </ImageBackground>
    
  </LinearGradient>
   
  );
}

const styles=StyleSheet.create({
  appContainer:{
    flex:1, // flex:1 occupa tutto lo spazio disponibile
    
  },
  backgroundImage:{
    opacity:0.15,
  }
})


