const texto = document.querySelector("#texto");
const submit = document.querySelector("#submit");
const decryptBtn = document.querySelector("#decrypt");
const containerRight = document.querySelector("#container-right_result");
const resultDiv = document.querySelector("#result");
const p = document.querySelector("#parag");
const clipboard = document.querySelector("#clipboard");

const text = () => {
  const arr = texto.value.toLowerCase().split("");
  const arrEncrypt = arr.map((l) => encrypt(l));
  const result = arrEncrypt.join("");
  if (result) {
    resultDiv.classList.remove("view");
    containerRight.classList.add("view");
    p.innerHTML = result;
  }

  resetForm();
};

const encrypt = (l) => {
  if (l == "a") {
    return (l = "ai");
  } else if (l == "e") {
    return (l = "enter");
  } else if (l == "i") {
    return (l = "imes");
  } else if (l == "o") {
    return (l = "ober");
  } else if (l == "u") {
    return (l = "ufat");
  } else {
    return l;
  }
  
};

const decrypt = () => {
  const supraA = /ai/gi;
  const supraE = /enter/gi;
  const supraI = /imes/gi;
  const supraO = /ober/gi;
  const supraU = /ufat/gi;

  const decrypt = texto.value
    .toLowerCase()
    .replace(supraA, "a")
    .replace(supraE, "e")
    .replace(supraI, "i")
    .replace(supraO, "o")
    .replace(supraU, "u");

  if (decrypt) {
    resultDiv.classList.remove("view");
    containerRight.classList.add("view");
    p.innerHTML = decrypt;
  }

  resetForm();
  
};

const resetForm = () => {
  texto.value = "";
};

const clipBoard = async () => {
  let parag = document.querySelector("#parag").innerHTML;
  await navigator.clipboard.writeText(parag);
};

submit.addEventListener("click", text);
decryptBtn.addEventListener("click", decrypt);
clipboard.addEventListener("click", clipBoard);