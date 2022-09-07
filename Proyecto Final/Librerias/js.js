mostrarCategorias()

//Funcion para que aparezcan los botones
function mostrarCategorias() {

  tipos.forEach((tipo) => {
    mostrarCategoria(tipo);
  })

}

function mostrarCategoria(categoria) {
  const nodoMenu = document.getElementById("menu");
  const btn = document.createElement("button");
  btn.innerText = categoria;
  btn.classList.add("boton");
  btn.setAttribute("id", categoria);
  btn.addEventListener("click", () => {
    mostrarPokemones(categoria);
  })
  nodoMenu.appendChild(btn);

}

//Funcion para los distintos casos

function mostrarPokemones(categoria) {
  switch (categoria) {
    case "Fuego":
      mostrarPokemonesFuego();
      break;
    case "Agua":
      mostrarPokemonesAgua();
      break;
    case "Planta":
      mostrarPokemonesPlanta();
      break;
    default:
      alert("Error")
      break;
  }
}


//Funcion para mostrar los pokemones
function mostrarPokemon(pokemon) {

  const div = document.getElementById("manejarOpcion")
  const pokemonDiv = document.createElement("div")
  pokemonDiv.setAttribute("style", "display:inline-block; margin:10px; border: 3px solid rgba(0, 0, 0, 1);")
  pokemonDiv.innerHTML = "";
  pokemonDiv.innerHTML = `<h3>${pokemon.nombre}</h3>
                         <h4>Ataque Principal ${pokemon.ataque}</h4>
                         
                         <div><img src="${pokemon.imagen}" alt="${pokemon.nombre}"> </div>
                         
                            `
  div.appendChild(pokemonDiv);

}

//Funcion utilizando datos de un archivo Fuego
function mostrarPokemonesFuego() {
  var div = document.getElementById("manejarOpcion")
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  fuegos.forEach((fuego) => {
    mostrarPokemon(fuego)
  })
}

//Funcion utilizando datos de un archivo Agua
function mostrarPokemonesAgua() {
  var div = document.getElementById("manejarOpcion")
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  aguas.forEach((agua) => {
    mostrarPokemon(agua)
  })
}

//Funcion utilizando datos de un archivo Planta
function mostrarPokemonesPlanta() {
  var div = document.getElementById("manejarOpcion")
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  plantas.forEach((planta) => {
    mostrarPokemon(planta)
  })
}






//Modo claro u obscuro
modoLightDark();
botonesLightDark();

function modoLightDark() {
  const mode = localStorage.getItem("mode");
  if (mode) {
    cambiarModo(mode);
  }
}

function botonesLightDark() {
  programarModo("dark");
  programarModo("light");
}

function programarModo(modo) {
  const boton = document.getElementById(`${modo}Mode`);
  boton.addEventListener("click", () => {
    cambiarModo(modo);
  });
}

function cambiarModo(modo) {
  if (modo === "dark") {
    document.body.setAttribute("style", "background-color:black;color:white;");
  } else if (modo === "light") {
    document.body.setAttribute("style", "background-color:white;color:black");
  }
  localStorage.setItem("mode", modo);
}
//Modo claro u obscuro


//Alert de Pikachu
Swal.fire({
  title: 'Hola Pokeamigo!',
  text: 'Soy el detective Pikachu y te guiare a nuestra proxima aventura',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIXcX3SqoQLTthHjysHmG8Dc_3D2PT4NCGQA&usqp=CAU',
  imageWidth: 450,
  imageHeight: 350,
  imageAlt: 'Imagen de Pikachu',
})
//Alert de Pikachu