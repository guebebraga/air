const buscarBalon=()=>{ 

//const botonBuscar = document.getElementsByClassName("boton")
const numB = document.getElementById("buscador")   

 if(!numB.value){
    let label = document.querySelector('.label');
    label.textContent = "Debe ingresar un número de balón.";
    label.style.color = "red";
}
else{
    fetch("mongodb://localhost:27017/airBackEnd/cilindro",{
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(numB),
    })
    .then(response => response.json())
    .then(data => alert(data.mensaje));
    console.log(numB)
}
};
