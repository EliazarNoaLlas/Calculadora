// Definimos la función isNumber que toma un argumento llamado "item"
export default function isNumber(item) {
  // La función utiliza una expresión regular (regex) para verificar si el "item" contiene al menos un dígito numérico (0-9)
  // La expresión regular /[0-9]+/ busca uno o más dígitos numéricos (0-9) en el "item"
  // La función test() devuelve true si encuentra coincidencias y false si no encuentra ninguna coincidencia
  return /[0-9]+/.test(item);
}