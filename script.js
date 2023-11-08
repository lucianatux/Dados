document.addEventListener("DOMContentLoaded", function () {
   
    const multiRollButton = document.getElementById("multiRollButton");
    const numberOfDiceInput = document.getElementById("numberOfDice");
    const multiDiceResult = document.getElementById("multiDiceResult");
  
    multiRollButton.addEventListener("click", function () {
      const numberOfDice = parseInt(numberOfDiceInput.value, 10);
      if (numberOfDice > 0 && numberOfDice <= 6) {
        multiDiceResult.innerHTML = ""; // Limpia los resultados anteriores
        for (let i = 0; i < numberOfDice; i++) {
          const randomNumber = getRandomNumber(1, 6);
          const imageName = `assets/dados${randomNumber}.png`;
          const diceImage = document.createElement("img");
          diceImage.src = imageName;
          diceImage.alt = "Dado";
          diceImage.classList = "diceImg";
          multiDiceResult.appendChild(diceImage);
        }
      } else {
        multiDiceResult.innerHTML = "Por favor, ingresa una cantidad válida de dados (1-6).";
      }
    });
  
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  });
  
