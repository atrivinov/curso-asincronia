# CALLBACKS

## ¿Qué es un callback?
Es una funcion que pasa como argumento otra funcion

## ¿Cuántos callbacks puede recibir una función?
Tantos como necesitemos

## EVENTOS DEL DOM
Son el claro ejemplo de callbacks, primero se recibe como
parametro el nombre del evento y luego se ejecuta un callback.

## FUNCIONES ANONIMAS
Son funciones que se ejecutan dentro de otras, no tienen nombre.

# RETO

Sumar dos elementos usando un callback

> Esta funcion se encarga de sumar dos elementos
```
const sum = (num1, num2) => {
  return num1 + num2;
}
```

> Esta funcion se encarga de realizar el calculo y recibe como parametros los numeros y el callback sum
```
const calc = (num1, num2, callback) => {
  return callback(num1, num2)
}
```

> Llamamos a la funcion calc, pasamos los numeros como parametro y la función callback que sera sum
```
console.log('El resultado es: ' + calc(2,2,sum))
```

⚠️ no es necesario agregar los parentesis al pasar la función por calc, si lo hicieramos, estariamos
invocando directamente la función y no es el objetivo, pues la función se ejecutará solo cuando calc
lo haga. Tampoco sería necesario que sum reciba los parametros, pues calc ya los esta recibiendo.

# XMLHTTP Request
Es un objeto de JS que permite hacer peticiones hacia servicios en la nube (URLs o APIs)

> Para trabajar con XMLHTTP Request debemos installar
```
npm i xmlhttprequest

const xmlhttprequest = require('xmlhttprequest')
```
> Documentación de XMLHTTP Request y Fake API Platzi
```
https://fakeapi.platzi.com/doc/introduction
https://www.npmjs.com/package/xmlhttprequest
```
# GET All products

Tenemos una base URL que es const API = 'https://api.escuelajs.co/api/v1'

Para poder hacer un fetch y obtener todos los productos basta con terminar de
agregar el endpoint ***/products*** asi:

```
`https://api.escuelajs.co/api/v1/products`
```

Su formato de respuesta será:
```
[
  {
    "id": 4,
    "title": "Handmade Fresh Table",
    "price": 687,
    "description": "Andy shoes are designed to keeping in...",
    "category": {
      "id": 5,
      "name": "Others",
      "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
    },
    "images": [
      "https://placeimg.com/640/480/any?r=0.9178516507833767",
      "https://placeimg.com/640/480/any?r=0.9300320592588625",
      "https://placeimg.com/640/480/any?r=0.8807778235430017"
    ]
  }
  // ...
]
```

Dependiendo si es un solo usuario se accede al endpoint ***/products/:id*** (Donde id es un parametro dinamico y tendra la forma ***/products/1***)

# OPERADOR OPTIONAL CHANGING ?.

> Si tenemos el siguiente objeto:

```
const persona = {
  nombre: 'Alexa',
  apellido: 'Triviño',
  direccion: {
    departamento: 'Antioquia,
    ciudad: 'Medellin',
    codigoPostal: 0,
    prefijoCiudad: '',
    }
    telefono: 0,
  }
}
```
Si queremos acceder a departamento seria ***persona.direccion.departamento***, sin embargo, si por cualquier error del sistema, la API que consumimos deja de tener disponible los campos de direccion esto me arrojara un error. La buena practica seria validar con condicionales que exista la propiedad, pero en codigo nos llenariamos de condicionales anidados para realizar esta operación, en lugar de eso podemos usar el operador de ***desencadenamiento opcional*** que retornara undefined cuando una propiedad no exista del siguiente modo ***persona?.direccion?.departamento*** validará la existencia de persona y de dirección.

Sin embargo el operador tiene una consideración, y es que, para cmapos como codigoPostal = 0 y prefijoCiudad = '' como son valores falsy retornara undefined como si no existieran, pero si existen, son 0 o ''.

Para capturar este error se usa un nuevo operador, el ***operador de coalesencia nula*** => ***??***

# OPERADOR DE COALESENCIA NULA ??

Siguiendo con el ejemplo anterior, una buena practica para definir variables antes era:

```
const telefono = persona.direccion.telefono || 'El valor no existe'
/// Es decir, si existe tomar el valor, de lo contrario tomar el mensaje 'Este valor no existe'
```
Con el operador de desencadenamiento opcional mejoraría asi:
```
const persona = persona?.direccion?.telefono || 'El valor no existe'
// Es decir, si existe toma el valor, sino existe retornara undefined y enviara el mensaje
```
Sin embargo, el codigo anterior tiene un error, ya que telefono es ***0*** y es un valor falsy, lo que hara que siempre entre al mensaje 'El valor no existe'. Para poder capturar incluso los caracterers vacios o los 0, existe el operador de coalesencia nula ?? que solo entrara en el mensaje cuando sea null o undefined, asi quedaria mejor estructurado:

```
const persona = persona?.direccion?.telefono ?? 'El valor no existe'
```
