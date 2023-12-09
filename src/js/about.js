// Função para ativar menu hamburguer
document.getElementById("navToggle").addEventListener("click", function () {
  var nav = document.getElementById("nav");
  nav.classList.toggle("active", !nav.classList.contains("active"));
});

// Função para girar a logo
function rotateLogo() {
  const logo = document.getElementById('logo');
  logo.style.transform = `rotate(${(360 * Math.random())}deg)`;
}

// Inicia a animação a cada 3 segundos (ajuste conforme necessário)
setInterval(rotateLogo, 300);
