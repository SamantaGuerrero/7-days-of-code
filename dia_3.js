const pregunta1 = prompt("¿En qué te gustaría especializarte, Front-End (1) o Back-End (2)?").toLowerCase();

if (pregunta1 === "front-end" || pregunta1 === "1") { 
    const pregunta2 = prompt("¿Qué te gustaría aprender, React (1) o Vue (2)?").toLowerCase();      
    
    if (pregunta2 === "react" || pregunta2 === "1") { 
        alert("Genial, aprenderás React, una de las bibliotecas más populares para el desarrollo web.");
    } else if (pregunta2 === "vue" || pregunta2 === "2") {
        alert("Excelente elección, Vue es un framework ligero y fácil de aprender.");
    } else {
        alert("Opción no válida.");
    }

} else if (pregunta1 === "back-end" || pregunta1 === "2") { 
    const pregunta2 = prompt("¿Qué te gustaría aprender, C# (1) o Java (2)?").toLowerCase();
    
    if (pregunta2 === "c#" || pregunta2 === "1" || pregunta2 === "csharp") { 
        alert("C# es un lenguaje potente para desarrollo de software y juegos con Unity.");
    } else if (pregunta2 === "java" || pregunta2 === "2") {
        alert("Java es un lenguaje robusto y ampliamente utilizado en aplicaciones empresariales.");
    } else {
        alert("Opción no válida.");
    }

} else {
    alert("Opción no válida.");
}

const eleccion = prompt("¿Te gustaría seguir especializándote en la misma área (1) o desarrollarte como Fullstack (2)?").toLowerCase();

if (eleccion === "1") {
    alert("¡Felicidades, vas por buen camino!");
} else if (eleccion === "2") {
    alert("¡Excelente, expandir tus conocimientos te dará mejores oportunidades!");
} else {
    alert("Opción no válida.");
}

let tecnologias = [];
let continuar = true;

while (continuar) {
    const ultima = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (Escribe el nombre o presiona 'Cancelar' para salir)")?.toLowerCase();
    
    if (ultima === null || ultima.trim() === "") {
        continuar = false;
    } else {
        tecnologias.push(ultima);
        alert(`¡Interesante elección! ${ultima} es una gran tecnología para explorar.`);
    }
}

if (tecnologias.length > 0) {
    alert(`Has elegido aprender sobre: ${tecnologias.join(", ")}`);
} else {
    alert("No elegiste ninguna tecnología adicional.");
}