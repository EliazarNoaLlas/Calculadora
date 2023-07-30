// Importamos React y cualquier otra dependencia necesaria
import React from "react";

// Definimos el componente Boton como una función que recibe varias props
export default function Boton({ clickHandle, name, gray, orange, wide, green }) {

  // Definimos una función handleClick que se ejecutará cuando se haga clic en el botón
  const handleClick = () => clickHandle(name);

  // Definimos una lista de clases de estilos que se aplicarán al componente

  // Devolvemos el JSX que representa el botón con las clases de estilos adecuadas
  return (
    <div>
      <button className="btn" onClick={handleClick}>{name}</button>
    </div>
  );
}
