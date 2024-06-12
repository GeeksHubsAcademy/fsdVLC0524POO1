 class Coche {

    constructor(modelo, marca, color, combustible, matricula, motor, velocidad, peso, potencia){
        this.velocidadConduccion = 0
        this.modelo = modelo
        this.marca = marca
        this.color = color
        this.combustible = combustible
        this.matricula = matricula
        this.motor = motor
        this.velocidad = velocidad
        this.peso = peso
        this.potencia = potencia
    }

    acelerar () {

        this.velocidadConduccion += parseInt(((this.velocidad / this.peso) * ((Math.floor(Math.random() * this.potencia) + 1) * 100)))
    }

    frenar () {

        this.velocidadConduccion = this.velocidadConduccion - 5

    }

}

