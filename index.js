// 9 = ---o---  --> --- ---
// 8= --- ---
// 7= ------
// 6= ---x---  -->  ------
let data = {
  9: {
    inicial: "hexMiddle.png",
    medio: "o.png",
    final: "hexMiddle.png",
    numero: 9,
  },
  8: {
    inicial: "hexMiddle.png",
    numero: 8,
  },
  7: {
    inicial: "hexaComplete.png",
    numero: 7,
  },
  6: {
    inicial: "hexMiddle.png",
    medio: "x.png",
    final: "hexMiddle.png",
    numero: 6,
  },
};
let dataHexa = {
  9: "hexMiddle.png",
  8: "hexMiddle.png",
  7: "hexaComplete.png",
  6: "hexMiddle.png",
};
let hexagramas = new Array();
let count = -1;

console.log(data["6"]);
let btnAccept = document.getElementById("AceptarHexa");

console.log(btnAccept);
btnAccept.addEventListener("click", function () {
  let hexa1 = parseInt(document.getElementById("Hexa1").value);
  let hexa2 = parseInt(document.getElementById("Hexa2").value);
  let hexa3 = parseInt(document.getElementById("Hexa3").value);
  let suma = hexa1 + hexa2 + hexa3;
  if (suma == 7 || suma == 8) {
    hexagramaNormal(suma);
  } else {
    hexagramaMutante(suma);
  }
  if (hexagramas.length == 6) {
    comprobarHexagrama();
  }
  // console.log(data[suma]);
});

function hexagramaMutante(suma) {
  hexagramas.push(data[suma]);
  console.log(suma, hexagramas);
  if (suma == 6) {
    let tableHexagrams = document.getElementById("tableHexagrams");
    let contentImgsDiv = document.createElement("div");
    contentImgsDiv.id = "contentImgs";
    contentImgsDiv.className = "contentImgs";
    tableHexagrams.appendChild(contentImgsDiv);
    // let contentImgs = document.getElementById("contentImgs");
    let img = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    img.src = "hexMiddle.png";
    img.width = 80;
    img.height = 20;
    img2.src = "hexMiddle.png";
    img2.width = 80;
    img2.height = 20;
    img3.src = "x.png";
    img3.width = 25;

    contentImgsDiv.appendChild(img);
    contentImgsDiv.appendChild(img3);
    contentImgsDiv.appendChild(img2);
  } else {
    let tableHexagrams = document.getElementById("tableHexagrams");
    let contentImgsDiv = document.createElement("div");
    contentImgsDiv.id = "contentImgs";
    contentImgsDiv.className = "contentImgs";
    tableHexagrams.appendChild(contentImgsDiv);
    let img = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    img.src = "hexMiddle.png";
    img.width = 80;
    img.height = 20;
    img2.src = "hexMiddle.png";
    img2.width = 80;
    img2.height = 20;
    img3.src = "o.png";
    img3.width = 25;

    contentImgsDiv.appendChild(img);
    contentImgsDiv.appendChild(img3);
    contentImgsDiv.appendChild(img2);
  }
}

function hexagramaNormal(suma) {
  console.log(suma, data[suma], "desde aqui");
  hexagramas.push(data[suma]);
  let tableHexagrams = document.getElementById("tableHexagrams");
  if (suma == 7) {
    let contentImgsCompleteDiv = document.createElement("div");
    contentImgsCompleteDiv.id = "contentImgsComplete";
    contentImgsCompleteDiv.className = "contentImgsComplete";
    tableHexagrams.appendChild(contentImgsCompleteDiv);
    let contentImgsComplete = document.getElementById("contentImgsComplete");
    let img = document.createElement("img");
    img.src = data[suma].inicial;
    img.width = 190;

    contentImgsCompleteDiv.appendChild(img);
    // contentImgsCompleteDiv.insertBefore(img, tableHexagrams.children[0]);
    // console.log(tableHexagrams.childNodes);
  } else {
    let contentImgsDiv = document.createElement("div");
    contentImgsDiv.id = "contentImgs";
    contentImgsDiv.className = "contentImgs";
    tableHexagrams.appendChild(contentImgsDiv);
    // let contentImgs = document.getElementById("contentImgs");
    let img = document.createElement("img");
    let img2 = document.createElement("img");
    img.src = data[suma].inicial;
    img.width = 80;
    img.height = 20;
    img2.src = data[suma].inicial;
    img2.width = 80;
    img2.height = 20;

    contentImgsDiv.appendChild(img);
    contentImgsDiv.appendChild(img2);
  }
  console.log(hexagramas);
}

const comprobarHexagrama = () => {
  let countHexagramas = false;
  console.log(hexagramas, "desde comprobar");
  hexagramas.forEach((hexagrama) => {
    if (hexagrama.numero == 6 || hexagrama.numero == 9) {
      console.log("hay un exaMutante");
      countHexagramas = true;
    }
  });
  console.log(countHexagramas, "desde aqui");
  if (countHexagramas) {
    console.log("hay exagramas mutantes");
  } else {
    noHayMutantes();
  }
};

const noHayMutantes = () => {
  let contenidoHexagramas = document.getElementById("tableHexagrams");
  let hexagramaListo = document.getElementById("hexagramaListo");
  let ok = document.getElementById("ok");
  hexagramaListo.style.display = "block";
  contenidoHexagramas.className = "tablaHexagramasNoMutantes";
  ok.addEventListener("click", () => {
    hexagramaListo.style.display = "none";
  });
};
