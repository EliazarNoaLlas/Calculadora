// Importamos las librerías y funciones necesarias
import Big from "big.js";
import operate from "./operate";
import isNumber from "./isNumber";

// Definimos la función "operaciones" que toma dos argumentos: "estado" y "nombreDeBoton"
export default function operaciones(estado, nombreDeBoton) {
  // Si el botón presionado es "AC" (borrar todo), reiniciamos el estado a los valores iniciales.
  if (nombreDeBoton === "AC") {
    return {
      total: null,
      siguiente: null,
      operador: null,
    };
  }

  // Si el botón presionado es un número
  if (isNumber(nombreDeBoton)) {
    // Si el número presionado es "0" y el estado siguiente es "0", no hacemos nada (ninguna operación).
    if (nombreDeBoton === "0" && estado.siguiente === "0") return { data: "ninguna" };

    // Si hay un operador seleccionado, entonces:
    if (estado.operador) {
      if (estado.siguiente) {
        // Si ya hay un número siguiente, concatenamos el número presionado al número existente.
        return { siguiente: estado.siguiente + nombreDeBoton };
      }
      // Si no hay número siguiente, simplemente establecemos el número presionado como el siguiente número.
      return { siguiente: nombreDeBoton };
    }

    // Si no hay operador seleccionado, entonces:
    if (estado.siguiente) {
      // Si ya hay un número siguiente y no hay operador, concatenamos el número presionado al número existente.
      const siguiente = estado.siguiente === "0" ? nombreDeBoton : estado.siguiente + nombreDeBoton;

      return {
        siguiente,
        total: null,
      };
    }

    // Si no hay número siguiente y no hay operador, establecemos el número presionado como el siguiente número.
    return {
      siguiente: nombreDeBoton,
      total: null,
    };
  }

  // Si el botón presionado es "%"
  if (nombreDeBoton === "%") {
    if (estado.operador && estado.siguiente) {
      // Si hay un operador seleccionado y un número siguiente, calculamos el resultado usando la función "operate".
      const result = operate(estado.total, estado.siguiente, estado.operador);

      // Luego, dividimos el resultado por 100 para obtener el porcentaje y actualizamos el estado.
      return {
        total: Big(result).div(Big("100")).toString(),
        siguiente: null,
        operador: null,
      };
    }

    // Si no hay operador o no hay número siguiente, no hacemos nada (ninguna operación).
    if (estado.siguiente) {
      return {
        siguiente: Big(estado.siguiente).div(Big("100")).toString(),
      };
    }

    return {};
  }

  // Si el botón presionado es "."
  if (nombreDeBoton === ".") {
    if (estado.siguiente) {
      // Si ya hay un número siguiente y ya contiene un punto decimal, no hacemos nada (ninguna operación).
      if (estado.siguiente.includes(".")) return {};

      // Si no hay punto decimal, concatenamos el punto al número siguiente.
      return { siguiente: estado.siguiente + "." };
    }

    // Si no hay número siguiente, establecemos "0." como el siguiente número.
    return { siguiente: "0." };
  }

  // Si el botón presionado es "="
  if (nombreDeBoton === "=") {
    if (estado.siguiente && estado.operador) {
      // Si hay un número siguiente y un operador seleccionado, calculamos el resultado usando la función "operate".
      return {
        total: operate(estado.total, estado.siguiente, estado.operador),
        siguiente: null,
        operador: null,
      };
    } else return {};

    // Si no hay número siguiente o no hay operador seleccionado, no hacemos nada (ninguna operación).
  }

  // Si el botón presionado es "+/-"
  if (nombreDeBoton === "+/-") {
    if (estado.siguiente) {
      // Si hay un número siguiente, multiplicamos el número por -1 para cambiar su signo.
      return { siguiente: (-1 * parseFloat(estado.siguiente)).toString() };
    }
    if (estado.total) {
      // Si no hay número siguiente pero hay un número total, multiplicamos el número por -1 para cambiar su signo.
      return { total: (-1 * parseFloat(estado.total)).toString() };
    }

    // Si no hay número siguiente ni número total, no hacemos nada (ninguna operación).
    return {};
  }

  // Si hay un operador seleccionado
  if (estado.operador) {
    // Calculamos el resultado usando la función "operate" y actualizamos el estado.
    return {
      total: operate(estado.total, estado.siguiente, estado.operador),
      siguiente: null,
      operador: nombreDeBoton,
    };
  }

  // Si no hay operador seleccionado y no hay número siguiente, establecemos el botón presionado como el nuevo operador.
  if (!estado.siguiente) return { operador: nombreDeBoton };

  // Si no se cumple ninguna de las condiciones anteriores, actualizamos el estado con el número siguiente y el operador.
  return {
    total: estado.siguiente,
    siguiente: null,
    operador: nombreDeBoton,
  };
}
