const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll(".btn");
const modoOscuroToggle = document.getElementById("modoOscuroToggle");

let operacion = "";
let resultadoMostrado = false;

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const valor = boton.textContent;

    if (valor === "C") {
      operacion = "";
      pantalla.value = "";
      resultadoMostrado = false;
    } else if (valor === "=") {
      try {
        const resultado = eval(operacion);
        pantalla.value = "= " + resultado;
        operacion = resultado.toString();
        resultadoMostrado = true;
        animarResultado();
      } catch {
        pantalla.value = "Error";
        operacion = "";
        resultadoMostrado = false;
      }
    } else {
      if (resultadoMostrado) {
        operacion = valor.match(/[0-9.]/) ? valor : operacion + valor;
        resultadoMostrado = false;
      } else {
        operacion += valor;
      }
      pantalla.value = operacion;
    }
  });
});

modoOscuroToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  modoOscuroToggle.textContent =
    document.body.classList.contains("dark") ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
});

function animarResultado() {
  pantalla.style.transition = "transform 0.3s ease";
  pantalla.style.transform = "scale(1.05)";
  setTimeout(() => {
    pantalla.style.transform = "scale(1)";
  }, 300);
}
