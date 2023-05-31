function changeColor() {
  const hex_numbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let hexCode = "";

  for (let i = 0; i < 6; i++) {
    const random_index = Math.floor(Math.random() * hex_numbers.length);

    hexCode += hex_numbers[random_index];
  }
  document.getElementById("hexCode").innerText = `#${hexCode}`;
  document.getElementsByTagName("body")[0].style.background = `#${hexCode}`;
}

function copyElementText(hexCode) {
  const text = document.getElementById(hexCode).innerText;
  const elem = document.createElement("textarea");
  document.body.appendChild(elem);
  elem.value = text;
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
}
