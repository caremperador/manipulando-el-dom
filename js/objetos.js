export const carlos = {
  nombre: "Eduardo",
  apellido: "Aranguri",
  edad: 32,
  pasatiempos: ["correr", "hacer ejercicios", "aprender programacion"],
  soltero: true,
  contacto: {
    email: "caremperador@gmail.com",
    facebook: "@eduaranguri",
    movil: 92842984298,
  },
  saludar: function () {
    console.log("Hola :)");
  },
  mensaje:function(){
    console.log("Hola, soy " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años.");
  }
};
console.log(carlos);
carlos.saludar();
console.log(carlos.nombre);
console.log(carlos.pasatiempos[1]);
console.log(carlos.contacto.email);
carlos.mensaje();
