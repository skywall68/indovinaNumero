import { Text, StyleSheet } from "react-native"
import  Colors  from "./../../costanti/colors"

function InstructionText({children}){

 return <Text style={styles.testo}>{children}</Text>
}
export default InstructionText

const styles = StyleSheet.create({
    testo:{
        color:Colors.accent500,
        fontSize:24,
    }
})