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
          diceImage.classList = "diceImg shake";
          multiDiceResult.appendChild(diceImage);
        }
      } else {
        multiDiceResult.innerHTML = "Por favor, ingresa una cantidad válida de dados (1-6).";
      }
       // Elimina la clase shake después de 3 segundos
    setTimeout(() => {
      document.querySelectorAll('.shake').forEach(el => el.classList.remove('shake'));
    }, 2000);
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
        // Agrega la clase shake a los elementos generados
    multiSpecialDiceResult.querySelectorAll('img').forEach(el => el.classList.add('shake'));

    // Elimina la clase shake después de 3 segundos
    setTimeout(() => {
      multiSpecialDiceResult.querySelectorAll('.shake').forEach(el => el.classList.remove('shake'));
    }, 2000);
    } else {
      multiSpecialDiceResult.innerHTML = "Por favor, ingresa una cantidad válida de dados especiales (1-6).";
    }
  });

  function rollSpecialDice() {
    const specialRandomNumber = getRandomNumber(1, 6);
    let specialImageName = "";

    switch (specialRandomNumber) {
      case 1:
        specialImageName = `assets/monsterdice.png`;
        break;
      case 2:
      case 3:
        specialImageName = `assets/liondice.png`;
        break;
      case 4:
      case 5:
      case 6:
        specialImageName = `assets/skulldice.png`;
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

const dungeonDiceButton = document.getElementById('dungeonDiceButton');
const numberOfFacesInput = document.getElementById('numberOfFaces');
const dungeonDiceResult = document.getElementById('dungeonDiceResult');

  document.getElementById('dungeonDiceButton').addEventListener('click', function() {
    // Obtén la cantidad de caras del dado
    var numberOfFaces = document.getElementById('numberOfFaces').value;
  
    // Verifica que la entrada sea un número válido
    if (!isNaN(numberOfFaces) && numberOfFaces >= 1 && numberOfFaces <= 100) {
      // Genera un número aleatorio entre 1 y la cantidad de caras
      var randomNumber = Math.floor(Math.random() * numberOfFaces) + 1;
  
      // Muestra el resultado en el elemento con id 'dungeonDiceResult'
      dungeonDiceResult.classList.add('shake');
       // Elimina la clase shake después de 3 segundos
     setTimeout(() => {
      dungeonDiceResult.classList.remove('shake');
    }, 2000);
      document.getElementById('dungeonDiceResult').innerText =  randomNumber;
    } else {
      alert('Por favor, ingresa una cantidad válida de caras para el dado.');
    }
  });

  
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  });
  
