/* RETO DE TRABAJAR CON FAKE API PLATZI */
const xmlhttprequest = require('xmlhttprequest')
const API = 'https://api.escuelajs.co/api/v1'; // Referencia al route de nuestra API

// Crear una funcion que nos permite recibir la url (API) y el callback (funcion anonima) para recibir la
// solicitud que nos esta entregando el llamado a esta API

function fetchData(urlApi, callback){
  let xhttp = new xmlhttprequest()

  xhttp.open('GET', urlApi, true) // ABRIMOS UNA PETICION GET
  xhttp.onreadystatechange = function(event) {
    if(xhttp.readyState === 4) { // 0 no se ha inicializado, 1 loading, 2 se ejecuto el send, 3 interactuando, 4 se ha completado la solicitud
      if(xhttp.status === 200) { // Codigos de HTTP 200 es la solicitud correcta
        callback(null, JSON.parse(xhttp.responseText))
      }
    } else {
      // Para manejo de errores
      const error = new Error('Error' + urlApi)
      return callback(error, null) // null porque no regreso ningun dato
    }
  }

  xhttp.send()
}
