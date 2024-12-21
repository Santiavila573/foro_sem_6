// Ejemplo 1: Uso de Promesas
const promesaEjemplo1 = () => {
    return new Promise((resolve) => {
        // Simula una operación asíncrona con setTimeout
        setTimeout(() => {
            resolve("¡Promesa cumplida!"); // Resuelve la promesa después de 2 segundos
        }, 2000);
    });
};

// Agrega un evento al botón para ejecutar el ejemplo de promesa
document.getElementById("ejemplo1").addEventListener("click", () => {
    promesaEjemplo1().then((resultado) => {
        alert(resultado); // Muestra el resultado en un alert
    });
});

// Ejemplo 2: Uso de Async/Await
const promesaEjemplo2 = () => {
    return new Promise((resolve) => {
        // Simula una operación asíncrona con setTimeout
        setTimeout(() => {
            resolve("¡Async/Await cumplido!"); // Resuelve la promesa después de 2 segundos
        }, 2000);
    });
};

// Agrega un evento al botón para ejecutar el ejemplo de async/await
document.getElementById("ejemplo2").addEventListener("click", async () => {
    const resultado = await promesaEjemplo2(); // Espera a que la promesa se resuelva
    alert(resultado); // Muestra el resultado en un alert
});

// Ejemplo 3: Promesa que rechaza
const promesaEjemplo3 = () => {
    return new Promise((resolve, reject) => {
        // Simula una operación asíncrona con setTimeout
        setTimeout(() => {
            reject("¡Error en la promesa!"); // Rechaza la promesa después de 2 segundos
        }, 2000);
    });
};

// Agrega un evento al botón para ejecutar el ejemplo de promesa que rechaza
document.getElementById("ejemplo3").addEventListener("click", () => {
    promesaEjemplo3()
        .then((resultado) => {
            alert(resultado); // Muestra el resultado si la promesa se resuelve
        })
        .catch((error) => {
            alert(error); // Muestra el error si la promesa se rechaza
        });
});