function declarada() {
  console.log("funcion declarada que puede ir en cualquier parte");
}
declarada();

const expresada = () => {
  console.log("funcion expresada que solo puede ir en la parte superior");
};
expresada();

const suma = (x) => {
  const suma = x + 3;
  return suma;
};
console.log(suma(2));

const suma2 = (x, y) => x + y;

console.log(suma2(2, 3));

const saludo = (nombre, apellido, año) => {
  return (
    "hola " +
    nombre +
    " " +
    apellido +
    " como estas, te encuentras en el año " +
    año
  );
};

console.log(saludo("carlos", "aranguri", 2023));
