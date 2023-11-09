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


  const multiSpecialDiceButton = document.getElementById("multiSpecialDiceButton");
  const multiSpecialDiceResult = document.getElementById("multiSpecialDiceResult");


  multiSpecialDiceButton.addEventListener("click", function () {
    const numberOfSpecialDice = parseInt(numberOfDiceInput.value, 10);
    if (numberOfSpecialDice > 0 && numberOfSpecialDice <= 6) {
      multiSpecialDiceResult.innerHTML = ""; // Limpia los resultados anteriores
      for (let i = 0; i < numberOfSpecialDice; i++) {
        rollSpecialDice();
      }
    } else {
      multiSpecialDiceResult.innerHTML = "Por favor, ingresa una cantidad válida de dados especiales (1-6).";
    }
  });

  function rollSpecialDice() {
    const specialRandomNumber = getRandomNumber(1, 6);
    let specialImageName = "";

    switch (specialRandomNumber) {
      case 1:
        specialImageName = `assets/dicemonster.jpg`;
        break;
      case 2:
      case 3:
        specialImageName = `assets/dicelion.jpg`;
        break;
      case 4:
      case 5:
      case 6:
        specialImageName = `assets/diceskull.jpg`;
        break;
      default:
        break;
    }

    const specialDiceImageElement = document.createElement("img");
    specialDiceImageElement.src = specialImageName;
    specialDiceImageElement.alt = "Dado Especial";
    specialDiceImageElement.className = "heroquest";
    multiSpecialDiceResult.appendChild(specialDiceImageElement);
  }
  
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  });
  
