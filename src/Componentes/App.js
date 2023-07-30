// Importamos los componentes y dependencias necesarios
import React, { Component } from "react";
import Display from "./Display";
import PanelDeBotones from "./PanelDeBotones";
import operaciones from "../logic/operaciones";

// Definimos el componente App como una clase que extiende Component de React
class App extends Component {
  // Definimos el estado inicial del componente con tres propiedades: total, siguiente y operador
  state = {
    total: null,
    siguiente: null,
    operador: null,
  }

  // Definimos la función handleClick que se ejecutará cuando se haga clic en un botón
  // Esta función recibe el nombre del botón como parámetro y actualiza el estado utilizando la función operaciones
  handleClick = nombreDeBoton => this.setState(operaciones(this.state, nombreDeBoton));

  render() {
    // Devolvemos el JSX que representa la calculadora
    // Incluimos el componente Display y el componente PanelDeBotones
    // El valor del Display será el valor actual del estado siguiente o total, o "0" si ambos son nulos
    return (
      <div>
        <Display value={this.state.siguiente || this.state.total || "0"} />
        <PanelDeBotones clickHandle={this.handleClick} />
      </div>
    );
  }
}

// Exportamos el componente App para que pueda ser utilizado en otras partes de la aplicación
export default App;
