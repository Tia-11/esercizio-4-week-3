const creareCelle = function () {
  for (let i = 0; i < 76; i++) {
    const celle = document.createElement("div");
    const contenutoCelle = document.createElement("p");
    celle.classList.add("celle");
    contenutoCelle.innerText = i + 1;
    const attaccareCelle = document.getElementById("tombola");
    attaccareCelle.appendChild(celle);
    celle.appendChild(contenutoCelle);
  }
};

let numeriusati = [];
const illuminaCelle = function () {
  const Button = document.getElementById("bottone");
  Button.addEventListener("click", function (e) {
    e.preventDefault;
    let x = document.querySelectorAll(".celle");
    let y = Math.floor(Math.random() * 76 + 1);

    for (let i = 0; i < 76; i++) {
      if (y === i) {
        x[i].style.backgroundColor = "lightblue";
      }
    }
  });
};

creareCelle();
illuminaCelle();
