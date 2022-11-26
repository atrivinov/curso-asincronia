// Es una funcion que pasa como argumento otra funcion

// RETO: Sumar dos elementos

// funcion encargada de sumar
const sum = (num1, num2) => {
  return num1 + num2;
}

// Segunda funcion que recibe callback
const calc = (num1, num2, callback) => {
  return callback(num1, num2)
}

//Llamamos la funcion calc
console.log('El resultado es: ' + calc(2,2,sum))
//No es necesario agregar los parentesis de sum porque sino la estariamos invocando directamente
//Tampoco es necesario pasarle los parametros porque calc es quien los recibe
