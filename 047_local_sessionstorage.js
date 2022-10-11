
sessionStorage.setItem("Nombre", "Vato");
//Los datos almacenados en sessionStorage son eliminados cuando se cierra la página (pestaña)

localStorage.setItem("Edad",33);
//Los datos persisten almacenados entre de las diferentes sesiones de navegación

//console.log(localStorage.getItem("Edad"));

setTimeout(()=>{localStorage.clear();sessionStorage.clear()},5000);
//clear() limpia completamente el almacenamiento