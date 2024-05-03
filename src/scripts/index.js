
const buscarBalon = () => {
    const num = document.getElementById("buscador");
    const resultadoDiv = document.getElementById("resultado");

    if (!num.value) {
        const label = document.querySelector('.label');
        label.textContent = "Debe ingresar un número de balón.";
        label.style.color = "red";
        return; // Detener la ejecución si no se proporciona un número de balón
    }

    const requestData = {
        num: num.value
    };
    num.value = "";

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
        const mensajeElement = document.createElement('h2');
        mensajeElement.textContent = data.mensaje;
        resultadoDiv.appendChild(mensajeElement);

        if (data.cilindro) {
            const cilindroNombre = document.createElement('p');
            const cilindroNum = document.createElement('p')
            const cilindroDes = document.createElement('p')
            const cilindroCarga = document.createElement('p')
           

            cilindroNombre.textContent = `Nombre:  ${data.cilindro.nombreGas}`
            cilindroNum.textContent = `num: ${data.cilindro.num}`
            cilindroDes.textContent = `Descripcion:  ${data.cilindro.descripcion}`
            cilindroCarga.textContent = `Carga: ${data.cilindro.carga}` 
            
            resultadoDiv.appendChild(cilindroNombre);
            resultadoDiv.appendChild(cilindroDes);
            resultadoDiv.appendChild(cilindroNum);
            resultadoDiv.appendChild(cilindroCarga)
            
        }
        else{
            label.textContent = data.mensaje
        }
    })
    .catch(error => console.error('Error:', error));
};

