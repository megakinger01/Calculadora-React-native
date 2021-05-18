import { StyleSheet } from "react-native";


export  const styles = StyleSheet.create({

    fondo:{
        flex:1,
        backgroundColor:'black',
       
    },
    calculadoraContainer:{
        flex:1,
        justifyContent:"flex-end",
        paddingHorizontal:20,

    },
    fila:{
        flexDirection:"row",
        paddingHorizontal:10,
        justifyContent:"center",
    },

    resultado:{
        color:'white',
        fontSize:60,
        textAlign:'right',
        marginBottom:10
    },
    resultadoPequeno:{
        color:'rgba(255,255,255,0.5)',
        fontSize:30,
        textAlign:'right'
    }
    
});