//Login
programarBotonLogin()

function programarBotonLogin() {
  const btn = document.getElementById("btnLogin")
  btn.addEventListener("click", () => {
    procesarLogin();
  })
}

function procesarLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Por favor, complete los datos para avanzar")
  } else {
    if (username === "qatar" && password === "2022") {
      //alert("Datos ingresados correctamente, seleccione aceptar para continuar")
      mostrarPagina();
    } else {
      alert("Contraseña Invalida")
    }
  }
}

function mostrarPagina() {
  window.location.href = 'librerias/index.html';

}
//Login

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