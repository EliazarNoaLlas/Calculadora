// Definimos el componente Display como una función
// Recibe una prop "value" que representa el valor que se mostrará en el display de la calculadora
export default function Display({ value }) {
  // Devolvemos el JSX que representa el display de la calculadora
  // El valor se muestra dentro de un div con la clase "component-display" para aplicar estilos
  // El valor se muestra dentro de otro div para poder aplicar estilos adicionales si es necesario
  return (
    <div>
      <div>{value}</div>
    </div>
  );
}
