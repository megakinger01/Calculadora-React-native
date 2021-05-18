import { useRef, useState } from "react"




enum Operadores {
    sumar, restar, multilplicar, dividir
}



export const useCalculadora = () => {


    const [numero, setNumero] = useState('0')
    const [numeroAnterior, setNumeroAnterior] = useState('0')

    const ultimaOperacion = useRef<Operadores>()

    const limpiar = () => {
        setNumero('0')
        setNumeroAnterior('0')
    }

    const armarNumero = (numeroTexto: string) => {

        // No aceptar el doble punto 
        if (numero.includes('.') && numeroTexto === '.') return

        if (numero.startsWith('0') || numero.startsWith('-0')) {

            // Punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto)

                // evaluar si es otro cero y si hay decimal
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto)

                // si el numero diferente de cero y no tiene punto
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto)

                // evitar el 0000.000
            } else if (numeroTexto == '0' && !numero.includes('.')) {
                setNumero(numero)
            } else {
                setNumero(numero + numeroTexto)
            }

        } else {

            setNumero(numero + numeroTexto)
        }

    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''))
        } else {
            setNumero('-' + numero)
        }
    }


    const btnDelete = () => {

        let negativo = ''
        let numerotemp = numero

        if (numero.includes('-')) {
            negativo = '-'
            numerotemp = numero.substr(1) /** le quita el negativo al numero */
        }

        if (numerotemp.length > 1) {
            setNumero(negativo + numerotemp.slice(0, -1))
        } else {
            setNumero('0')
        }

    }




    const cambiarNumeroAnterior = () => {

        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1))
        } else {
            setNumeroAnterior(numero)

        }
        setNumero('0')
    }



    const btnDividir = () => {
        cambiarNumeroAnterior()
        ultimaOperacion.current = Operadores.dividir

    }

    const btnMultiplicar = () => {
        cambiarNumeroAnterior()
        ultimaOperacion.current = Operadores.multilplicar

    }

    const btnRestar = () => {
        cambiarNumeroAnterior()
        ultimaOperacion.current = Operadores.restar
    }

    const btnSumar = () => {
        cambiarNumeroAnterior()
        ultimaOperacion.current = Operadores.sumar
    }


    const calcular = () => {

        const num1 = Number(numero)
        const num2 = Number(numeroAnterior)

        switch (ultimaOperacion.current) {

            case Operadores.sumar:
                setNumero(`${num1 + num2}`)
                break;

            case Operadores.restar:
                setNumero(`${num2 - num1}`)
                break;
            case Operadores.multilplicar:
                setNumero(`${num1 * num2} `)
                break;
            case Operadores.dividir:
                setNumero(`${num2 / num1} `)
                break;
        }

        setNumeroAnterior('0')
    }
    return {

        limpiar,
        armarNumero,
        positivoNegativo,
        btnDelete,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
        numeroAnterior,
        numero
    }
}
