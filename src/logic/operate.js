import Big from "big.js";

// Definimos la función "operate" que toma tres argumentos: "numeroUno", "numeroDos" y "operador".
export default function operate(numeroUno, numeroDos, operador) {
  // Convertimos los números en objetos Big para poder realizar operaciones precisas.
  const uno = Big(numeroUno || "0");
  const dos = Big(numeroDos || (operador === "÷" || operador === 'x' ? "1": "0"));

  // Realizamos la operación correspondiente según el operador.
  if (operador === "+") return uno.plus(dos).toString();
  if (operador === "-") return uno.minus(dos).toString();
  if (operador === "x") return uno.times(dos).toString();
  if (operador === "/") return uno.div(dos).toString();
}
