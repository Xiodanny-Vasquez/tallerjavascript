// -Crea un objeto JSON que represente un libro con las propiedades: título, autor y año de publicación.


const libro ={
    titulo: "El suicidario del monte venir",
    autor: "Gustavo Bolívar Moreno",
    publicacion: 2007,  
};

const libroJSON = JSON.stringify(libro);
console.log(libroJSON);