const numB = document.getElementsByClassName("buscador")
const botonBuscar = document.getElementsByClassName("buscar")

botonBuscar.addEventListener("click",()=>{
const numBalon = numB.value

 if(numBalon){
    fetch("mongodb://localhost:27017/airBackEnd",{
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(numBalon),
        })
        .then(response => response.json())
        .then(data => alert(data.message));
    }
    else{
        alert("Debe ingresar numero de balon")
    }
});
