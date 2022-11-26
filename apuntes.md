# CALLBACKS

## ¿Qué es un callback? =>
Es una funcion que pasa como argumento otra funcion

## ¿Cuántos callbacks puede recibir una función? =>
tantos como necesitemos

## EVENTOS DEL DOM =>
Son el claro ejemplo de callbacks, primero se recibe como
parametro el nombre del evento y luego se ejecuta un callback.

## FUNCIONES ANONIMAS =>
Son funciones que se ejecutan dentro de otras, no tienen nombre.

# RETO

Sumar dos elementos usando un callback

> Esta funcion se encarga de sumar dos elementos
const sum = (num1, num2) => {
  return num1 + num2;
}

> Esta funcion se encarga de realizar el calculo y
// Segunda funcion que recibe callback
const calc = (num1, num2, callback) => {
  return callback(num1, num2)
}

> Llamamos a la funcion calc, pasamos los numeros como parametro y la función callback que sera sum
console.log('El resultado es: ' + calc(2,2,sum))

⚠️ no es necesario agregar los parentesis al pasar la función por calc, si lo hicieramos, estariamos
invocando directamente la función y no es el objetivo, pues la función se ejecutará solo cuando calc
lo haga. Tampoco sería necesario que sum reciba los parametros, pues calc ya los esta recibiendo.
