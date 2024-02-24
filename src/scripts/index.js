const numB = document.getElementsByClassName("buscador")
const botonBuscar = document.getElementsByClassName("boton")
let lista = document.getElementsByClassName("lista")

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
        let label = document.querySelector('.label');
        label.textContent = "Debe ingresar un número de balón.";
        label.style.color = "red";
    }
};
