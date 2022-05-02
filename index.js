const button = document.querySelector("button");
const hexCode = document.getElementById("hex-code");
const hexValues = [
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

button.addEventListener("click", () => {
  let hex_number = "";
  for (let i = 0; i < 6; i++) {
    let random_index = Math.floor(Math.random() * hexValues.length);
    hex_number += hexValues[random_index];
  }
  console.log(hex_number);
  hexCode.textContent = hex_number;
  document.body.style.backgroundColor = `#${hex_number}`;
});
