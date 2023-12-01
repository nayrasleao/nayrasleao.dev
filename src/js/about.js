document.getElementById("navToggle").addEventListener("click", function () {
  var nav = document.getElementById("nav");
  nav.classList.toggle("active", !nav.classList.contains("active"));
});
