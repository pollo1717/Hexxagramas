//------Los hexgaramas mutantes se transformaran en esto
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
let borrarHexa = document.getElementById("borrarHexa");
let reiniciar = document.getElementById("reiniciarHexa");
let aleatorioHexa = document.getElementById("aleatorioHexa");

aleatorioHexa.addEventListener("click", () => {
  let hexa1 = document.getElementById("Hexa1");
  let hexa2 = document.getElementById("Hexa2");
  let hexa3 = document.getElementById("Hexa3");
  hexa1.value = Math.floor(Math.random() * (3 - 2 + 1) + 2);
  hexa2.value = Math.floor(Math.random() * (3 - 2 + 1) + 2);
  hexa3.value = Math.floor(Math.random() * (3 - 2 + 1) + 2);
});

borrarHexa.addEventListener("click", () => {
  hexagramas.pop(data[data.length - 1]);

  let tableHexagrams = document.getElementById("tableHexagrams");
  // console.log(tableHexagrams.lastChild);
  tableHexagrams.removeChild(tableHexagrams.lastChild);
});

reiniciar.addEventListener("click", () => {
  location.reload();
});

console.log(btnAccept, Math.floor(Math.random() * (3 - 2 + 1) + 2));
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
    //creamos las imageens
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
    hayMutantes();
  } else {
    noHayMutantes(hexagramas);
  }
};

const noHayMutantes = () => {
  let contenidoHexagramas = document.getElementById("tableHexagrams");
  let hexagramaEcho = contenidoHexagramas.cloneNode(true);
  let hexagramaListo = document.getElementById("hexagramaListo");
  let ok = document.getElementById("ok");
  hexagramaListo.style.display = "block";
  contenidoHexagramas.className = "tablaHexagramasNoMutantes";
  btnAccept.disabled = true;
  btnAccept.style.background = "grey";
  ok.addEventListener("click", () => {
    hexagramaListo.style.display = "none";
  });
  showHexaResult(hexagramaEcho);
};

const hayMutantes = () => {
  //desabilitando el boton de añadir nuevo hexa
  btnAccept.disabled = true;
  btnAccept.style.background = "grey";
  borrarHexa.disabled = "true";
  borrarHexa.style.background = "grey";

  let contenidoHexagramas = document.getElementById("tableHexagrams");
  let sigHexagramaBtn = document.getElementById("sigHexagramaBtn");
  let contenTablaHexagram = document.getElementById("contenTablaHexagram");
  sigHexagramaBtn.parentElement.style.display = "block";
  //aqui clone el exagrama original para despues cambiarlle los estilos y asi generar un nuevo
  let newHexagramaDiv = contenidoHexagramas.cloneNode(true);
  let newHexagramaDivMutado = contenidoHexagramas.cloneNode(true);

  sigHexagramaBtn.addEventListener("click", () => {
    contenTablaHexagram.appendChild(newHexagramaDiv);
    sigHexagramaBtn.parentElement.style.display = "none";
    newHexagramaDiv.childNodes.forEach((nodo) => {
      //si existen 3 imagenes
      // console.log(nodo, "ando en nodos");
      if (nodo.childNodes[1] && nodo.childNodes.length > 2) {
        console.log(nodo, "ando en este nodo");
        // nodo.childNodes[1].src = "";
        nodo.childNodes[1].remove();
      }
    });
    hexagramaMutado(contenTablaHexagram, newHexagramaDivMutado);
  });
};

const hexagramaMutado = (padreNodo, hexaNoMutado) => {
  console.log(padreNodo, hexaNoMutado, "desdeaca");
  padreNodo.appendChild(hexaNoMutado);
  hexaNoMutado.childNodes.forEach((nodo) => {
    if (nodo.childNodes[1]) {
      if (nodo.childNodes[1].src.split("/")[3].split(".")[0] == "x") {
        // console.log("YEAA", nodo.childNodes[1]);
        nodo.childNodes[1].previousSibling.src = "hexaComplete.png";
        nodo.childNodes[1].previousSibling.style.width = "233px";
        nodo.childNodes[1].previousSibling.style.margin = "auto";
        nodo.childNodes[1].style.display = "none";
        nodo.childNodes[1].nextSibling.style.display = "none";
      }
      if (nodo.childNodes[1].src.split("/")[3].split(".")[0] == "o") {
        // nodo.childNodes[1].src = "";
        nodo.childNodes[1].remove();
      }
    }
  });
  showHexaResult(hexaNoMutado);
};

const showHexaResult = (yaMutoHexagrama) => {
  //yamutoHexagrama son mis hexgramas que voy a dividir 3x3
  console.log(yaMutoHexagrama);
  let fatherContetTableImgHexagrama = document.getElementById(
    "fatherContetTableImgHexagrama"
  );
  fatherContetTableImgHexagrama.style.display = "flex";
  //aqui insertare mis exagramas superior e inferior
  let contentHexagramFinal = document.getElementById("contentHexagramFinal");
  //aqui insertare 3x3 hexagrams que viene de mi arreglo yamutohexagramas
  let tableHexagramsSuperior = document.getElementById(
    "tableHexagramsSuperior"
  );
  let tableHexagramsInferior = document.getElementById(
    "tableHexagramsInferiror"
  );

  //recorrer el arreglo de exagramas y los vamos  acopiar
  yaMutoHexagrama.childNodes.forEach((node, index) => {
    console.log(node, index);
    //nodos Inferirores
    if (index < 3) {
      tableHexagramsInferior.appendChild(node.cloneNode(true));
    } else {
      tableHexagramsSuperior.appendChild(node.cloneNode(true));
    }
  });

  let newNodoImg = document.createElement("div");
  let newImg = document.createElement("img");
  newNodoImg.className = "contetTableImgHexagrama";
  newImg.src = "hexagramasTable.png";
  newNodoImg.appendChild(newImg);
  fatherContetTableImgHexagrama.appendChild(newNodoImg);
};
