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
agregar el endpoint /products asi:

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
