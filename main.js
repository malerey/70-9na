
// // Elementos del DOM
const tarjeta = document.querySelector("#operaciones")
const filtroTipo = document.querySelector("#filtro-tipo")
const filtroCategoria = document.querySelector("#filtro-categoria")

// // Informacion


const operaciones = [
  {
    descripcion: 'Cena con amigos',
    categoria: 'salidas',
    fecha: '2021-01-01',
    monto: 2500,
    tipo: 'gasto',
  },
  {
    descripcion: 'sueldo',
    categoria: 'sueldo',
    fecha: '2021-02-01',
    monto: 50000,
    tipo: 'ganancia',
  },
  {
    descripcion: 'pagar monotributo',
    categoria: 'sueldo',
    fecha: '2021-01-02',
    monto: 40000,
    tipo: 'gasto',
  },
  {
    descripcion: 'Aguinaldo',
    categoria: 'sueldo',
    fecha: '2020-01-01',
    monto: 25000,
    tipo: 'ganancia',
  },
  {
    descripcion: 'Comida para gatos',
    categoria: 'mascotas',
    fecha: '2022-01-01',
    monto: 3000,
    tipo: 'gasto',
  },
  {
    descripcion: 'alquiler',
    categoria: 'alquiler',
    fecha: '2021-02-01',
    monto: 25000,
    tipo: 'gasto',
  },
  {
    descripcion: 'Expensas',
    categoria: 'alquiler',
    fecha: '2021-01-02',
    monto: 5000,
    tipo: 'gasto',
  },
];





// Funciones
const mostrarOperacionesEnHTML = (array) => {
  let acc = ""

  array.map((operacion) => {
    acc = acc + `
    <div class="fila">
      <p>${operacion.descripcion}</p>
      <p>${operacion.categoria}</p>
      <p>${operacion.tipo}</p>
      <p>${operacion.monto}</p>
      <p>${operacion.fecha}</p>
    </div>
    `
  })

  tarjeta.innerHTML = acc
}



mostrarOperacionesEnHTML(operaciones)


const aplicarFiltros = () => {

  // en el filter se retorna una pregunta, una condicion
  // cada uno de los elem del array responde esa condicion
  // si responde true, pasa a formar parte del nuevo array
  const tipo = filtroTipo.value 
  const filtradoPorTipo = operaciones.filter((operacion) => {
    if (tipo === "todos") {
      return operacion
    }
    return operacion.tipo === tipo
  })
  
  const categoria = filtroCategoria.value 
  const filtradoPorCategoria = filtradoPorTipo.filter((operacion) => {
    if (categoria === "todos") {
      return operacion
    }
    return operacion.categoria === categoria
  })

  filtradoPorCategoria.sort((a, b) => {
    return new Date(a.fecha) - new Date(b.fecha)
  })

  const arrayFinal = filtradoPorCategoria.map((operacion) => {
    const nuevoElemento = {...operacion}
    nuevoElemento.fecha = new Date(operacion.fecha).toLocaleDateString() // 2020-01-01
    return nuevoElemento
  })
  
  return arrayFinal 



// ordenar el array por fecha 
// ver la fecha que elige el usuario
// encontrar esa fecha en mi array
// quedarme con todos los que vengan despues 


}

filtroTipo.onchange = () => {
  const arrayFiltrado = aplicarFiltros()
  mostrarOperacionesEnHTML(arrayFiltrado)
}

filtroCategoria.onchange = () => {
 const arrayFiltrado = aplicarFiltros()
  mostrarOperacionesEnHTML(arrayFiltrado)
}



// // const form = document.querySelector("form")

// // form.onsubmit = (e) => {
// //   // este e.preventDefault evita que el formulario se envie 
// //   e.preventDefault()
  
  
// }


const filtroFecha = document.querySelector("#filtro-fecha")

filtroFecha.oninput = () => {
  console.log(filtroFecha.value)
}

const fecha = document.querySelector("#fecha")

// crear la fecha de hoy 
const fechaDeHoy = new Date()
fecha.textContent = fechaDeHoy
console.log(fechaDeHoy)

// ejemplo de metodo para fechas: convertir a UTC 
// console.log(fechaDeHoy.toUTCString())

// // convertir a ISOS
// console.log(fechaDeHoy.toISOString())
