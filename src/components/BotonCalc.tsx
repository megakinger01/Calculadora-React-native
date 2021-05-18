import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


interface Props {
    texto: string;
    color?: string;
    ancho?: boolean;
    accion: ( numeroTexto: string ) => void;
}

export const BotonCalc = ({ texto, color = '#2D2D2D', ancho, accion }: Props) => {

    return (
        <TouchableOpacity
            onPress={ () => accion( texto ) }
        >
            <View style={{
                ...styles.btn,
                backgroundColor: color,
                width: (ancho) ? 145 : 70
            }}>
                <Text style={{
                    ...styles.btnTexto,
                    color: (color === '#9B9B9B') ? 'black' : 'white',
                }}>
                    {texto}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    btn: {
        borderRadius: 100,
        height: 70,
        width: 70,
        backgroundColor: '#2D2D2D',
        justifyContent: 'center',
        marginHorizontal: 5,
        marginBottom: 10
    },

    btnTexto: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        padding: 10,
    }

});