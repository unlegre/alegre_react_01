
const heroes =[ "WonderWoman","Superman","Flash","Aquaman"]
console.log(heroes);
heroes.push("Batman")

//tener acceso a los botones
const showButton = document.getElementById("show")
const hideButton = document.getElementById("hide")
const searchInput = document.getElementById("search")
const lista = document.getElementById("list")

// añadir funcionalidad para mostrar personajes
showButton.addEventListener("click",()=> {
let innerConter = ""; // inicializo con string bacio. innerConter contenido interno

for( const heroe of heroes){ // recorro el array con un for of
    innerConter += `<li>${heroe}</li>` // a innerconter le voy sumando el contenido 
}  // lo envolvemos en un listaa desordenada, un templey de string que se le agrega una variable, dentro de un etiqueta li recorremos todo el array de heroes                                    

console.log(innerConter);
lista.innerHTML = innerConter; // le asigno lo q contiene la lista a 
//innerHTML es un atributo de la lista
})

//añadir funcionaldidad para ocultar personajes
hideButton.addEventListener("click",()=> { //capturo el boton :hideButton y creo un evento con "click"
    lista.innerHTML =" " // y creo una funciom ()=> {  lista.innerHTML =" " }para borrar la lista , asignando un string vacio para ocultar le lista
})

//mostrar solo los filtrados
searchInput.addEventListener( "keyup", (e)=>{ // con keyup capturo las letras del input de la const searchInput con id search que suceden en el evento(e)
    console.log(e.target.value);
    const heroesFiltrados = heroes.filter(heroe => heroe.includes(e.target.value)) //creo una const :heroesFiltrados para filtrar con filter
// los valores que tengo en el array heroes y creo la funciom :(heroe => heroe.includes(e.target.value)) para traer esos valores 
// filter recorre todo el array de heroes y se fija los valores que estan en el input
    console.log(heroesFiltrados);
   // con esta funcion me muestra por pantalla los filtrados
    let innerConter = "";
    for( const heroe of heroesFiltrados){ // recorro el array con un for of de la nueva lista :heroesFiltrados}
        innerConter += `<li>${heroe}</li>` // a innerconter le voy sumando el contenido 
    }  // lo envolvemos en un listaa desordenada, un templey de string que se le agrega una variable, dentro de un etiqueta li recorremos todo el array de: heroesFiltrados}                                  
    
    lista.innerHTML = innerConter; // le asigno lo q contiene la lista a 
    //innerHTML es un atributo de la lista
    })
