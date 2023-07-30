// Importamos el componente Button que representa un botón de la calculadora
import Button from "./Boton";

// Definimos el componente PanelDeBotones como una función
export default function PanelDeBotones({ clickHandle }) {
  // Definimos la función handleClick que se ejecutará cuando se haga clic en un botón
  // Esta función recibe el nombre del botón como parámetro y llama a la función clickHandle pasándole dicho nombre
  const handleClick = nombreDeBoton => {
    clickHandle(nombreDeBoton);
  };

  // Devolvemos el JSX que representa el panel de botones de la calculadora
  // Agrupamos los botones en divisiones para formar filas en el diseño de la calculadora
  // Cada Button representa un botón y se le pasa el nombre del botón y la función handleClick como propiedades
  // Los botones especiales tienen diferentes estilos, que se indican mediante las props "gray", "orange", "wide" y "green"
  return (
    <div>
      <div>
        <Button name="AC" clickHandle={handleClick}/>
        <Button name="+/-" clickHandle={handleClick}/>
        <Button name="%" clickHandle={handleClick}/>
        <Button name="/" clickHandle={handleClick}/>
      </div>
      <div>
        <Button name="7" clickHandle={handleClick} />
        <Button name="8" clickHandle={handleClick} />
        <Button name="9" clickHandle={handleClick} />
        <Button name="x" clickHandle={handleClick} />
      </div>
      <div>
        <Button name="4" clickHandle={handleClick} />
        <Button name="5" clickHandle={handleClick} />
        <Button name="6" clickHandle={handleClick} />
        <Button name="-" clickHandle={handleClick} />
      </div>
      <div>
        <Button name="1" clickHandle={handleClick} />
        <Button name="2" clickHandle={handleClick} />
        <Button name="3" clickHandle={handleClick} />
        <Button name="+" clickHandle={handleClick} />
      </div>
      <div>
        <Button name="0" clickHandle={handleClick} />
        <Button name="." clickHandle={handleClick} />
        <Button name="=" clickHandle={handleClick} />
      </div>
    </div>
  );
}
