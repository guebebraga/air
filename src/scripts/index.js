const numB = document.getElementsByClassName("buscador")
const botonBuscar = document.getElementsByClassName("boton")
const lista = document.getElementsByClassName("lista")
let label = document.getElementsByClassName('label')

const numBalon = numB.value

const buscarBalon=()=>{
 if(numBalon){
    fetch("mongodb://localhost:27017/airBackEnd/cilindro",{
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(numBalon),
        })
        .then(response => response.json())
        .then(data => alert(data.mensaje));
        
    }
    else{
        alert("Debe ingresar numero de balon")
    }
};
