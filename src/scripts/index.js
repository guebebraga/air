/*
const buscarBalon=()=>{ 
const buscador = document.getElementById("buscador")   

 if(!buscador.value){
    let label = document.querySelector('.label');
    label.textContent = "Debe ingresar un número de balón.";
    label.style.color = "red";
    return
}

const requestData = {
    _id: buscador.value
};

    fetch("http://localhost:8080/cilindro",{
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(buscador.value),
    })
    .then(response => response.json())
    .then(data => alert(data));

};

*/

/*
const buscarBalon = () => {
    const numB = document.getElementById("buscador");

    if (!numB.value) {
        let label = document.querySelector('.label');
        label.textContent = "Debe ingresar un número de balón.";
        label.style.color = "red";
        return; // Detener la ejecución si no se proporciona un número de balón
    }

    fetch(`http://localhost:8080/cilindro/${numB.value}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('La solicitud falló');
        }
        return response.json();
    })
    .then(data => alert(data.mensaje))
    .catch(error => console.error('Error:', error));
};
*/

/*
const buscarBalon = () => {
    const numB = document.getElementById("buscador");

    if (!numB.value) {
        let label = document.querySelector('.label');
        label.textContent = "Debe ingresar un número de balón.";
        label.style.color = "red";
        return; // Detener la ejecución si no se proporciona un número de balón
    }

    const requestData = {
        _id: numB.value
    };
    numB.value=""

    fetch("http://localhost:8080/cilindro", {
        method: "POST", // Cambiado a método POST
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData) // Convertir objeto a JSON y enviar en el cuerpo
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('La solicitud falló');
        }
        return response.json();
    })
    .then(data => alert(data.mensaje))
    .catch(error => console.error('Error:', error));
    alert(requestData._id)
};
*/
/*
const buscarBalon = () => {
    const numB = document.getElementById("buscador");

    if (!numB.value) {
        let label = document.querySelector('.label');
        label.textContent = "Debe ingresar un número de balón.";
        label.style.color = "red";
        return; // Detener la ejecución si no se proporciona un número de balón
    }

    const requestData = {
        _id: numB.value
    };
    numB.value = "";

    fetch("http://localhost:8080/cilindro", {
        method: "POST", // Cambiado a método POST
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData) // Convertir objeto a JSON y enviar en el cuerpo
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('La solicitud falló');
        }
        return response.json();
    })
    .then(data => {
        alert(data.mensaje); // Alertar el mensaje de respuesta del servidor
        console.log(data.cilindro); // Mostrar el cilindro encontrado en la consola
    })
    .catch(error => console.error('Error:', error));
};
*/

const buscarBalon = () => {
    const numB = document.getElementById("buscador");
    const resultadoDiv = document.getElementById("resultado");

    if (!numB.value) {
        let label = document.querySelector('.label');
        label.textContent = "Debe ingresar un número de balón.";
        label.style.color = "red";
        return; // Detener la ejecución si no se proporciona un número de balón
    }

    const requestData = {
        _id: numB.value
    };
    numB.value = "";

    fetch("http://localhost:8080/cilindro", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('La solicitud falló');
        }
        return response.json();
    })
    .then(data => {
        // Limpiar contenido anterior
        resultadoDiv.innerHTML = '';

        // Crear elementos para mostrar la información
        const mensajeElement = document.createElement('p');
        mensajeElement.textContent = data.mensaje;
        resultadoDiv.appendChild(mensajeElement);

        if (data.cilindro) {
            const cilindroElement = document.createElement('p');
            cilindroElement.textContent = `Cilindro encontrado: ${data.cilindro.nombreGas}`;
            resultadoDiv.appendChild(cilindroElement);
        }
    })
    .catch(error => console.error('Error:', error));
};

