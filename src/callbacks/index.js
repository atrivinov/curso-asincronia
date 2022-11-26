const sum = (num1, num2) => {
  return num1 + num2;
}

const calc = (num1, num2, callback) => {
  return callback(num1, num2)
}

console.log('El resultado es: ' + calc(2,2,sum))

setTimeout(() => {
  console.log('Hola JavaScript')
}, 5000);

const saludo = (name) => {
  console.log(`Hola soy ${name}`)
}

setTimeout(saludo, 2000, 'Alexa')
