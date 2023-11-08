/*const rollButton = document.getElementById("rollButton");
const die = document.getElementById("die");

rollButton.addEventListener("click", () => {
  const randomValue = Math.floor(Math.random() * 6) + 1; // Genera un número aleatorio del 1 al 6
  die.textContent = randomValue;
  die.style.display = "block";
});

// Opcional: Animación al hacer clic en el botón
rollButton.addEventListener("click", () => {
  die.style.animation = "none";
  void die.offsetWidth; // Truco para reiniciar la animación
  die.style.animation = "spin 1s ease-out";
});
*/
const rollButton = document.getElementById("rollButton");
const die = document.getElementById("die");

// Función para obtener el valor de los puntos del dado
function getDiceValue(randomValue) {
  switch (randomValue) {
    case 1:
      return "•";
    case 2:
      return "• •";
    case 3:
      return "•\n• •";
    case 4:
      return "• •\n• •";
    case 5:
      return "• •\n• •\n•";
    case 6:
      return "• • •\n• • •";
    default:
      return "";
  }
}

rollButton.addEventListener("click", () => {
  const randomValue = Math.floor(Math.random() * 6) + 1;
  const diceValue = getDiceValue(randomValue);

  // Mostrar los puntos en el dado al lanzarlo
  die.textContent = diceValue;
  die.style.display = "block";
});

// Opcional: Animación al hacer clic en el botón
rollButton.addEventListener("click", () => {
  die.style.animation = "none";
  void die.offsetWidth; // Truco para reiniciar la animación
  die.style.animation = "spin 1s ease-out";
});
