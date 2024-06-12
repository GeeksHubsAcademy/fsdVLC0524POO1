
import Coche from "./coche.js";

const carA = document.getElementById("carA")
const carB = document.getElementById("carB")

const mandyCar = new Coche("i8", "BMW", "pink", "hybrid", "8745 LLL", 300, 260, 2000, 7);
const abraCar = new Coche("gtr", "Nissan", "grey", "explosion", "8555 LLK", 280, 250, 1900, 6);

carA.innerHTML = mandyCar.velocidadConduccion
carB.innerHTML = abraCar.velocidadConduccion

document.getElementById("mandyCar").addEventListener("click", ()=> {
    mandyCar.acelerar()
    carA.innerHTML = mandyCar.velocidadConduccion
})

document.getElementById("abraCar").addEventListener("click", ()=> {
    abraCar.acelerar()
    carB.innerHTML = abraCar.velocidadConduccion
})


// console.log(`Empieza la carrera y ambos coches estan en ... mandyCar: ${mandyCar.velocidadConduccion} abraCar: ${abraCar.velocidadConduccion}`)

// mandyCar.acelerar()

// console.log(`Mandy va ganando ${mandyCar.velocidadConduccion} frente a Abraham ${abraCar.velocidadConduccion}`)