/**
 * Canal do Prof. Luis Vulcanis
 * 
 * DESAFIO JAVASCRIPT 03
 * 
 * Como mostrar o hotário por extenso?
 * 
 * 16:19
 * 
 * Dezesseis horas e dezenove minutos.
 */

let horas = ["Zero","Uma","Duas","Três","Quatro","Cinco","Seis","Sete","Oito","Nove","Dez","Onze","Doze","Treze","Quatorze","Quinze","Dezesseis","Dezessete","Dezoito","Dezenove","Vinte","Vinte e uma","Vinte e duas","Vinte e três"]

let minutos = ["zero","um","dois","três","quatro","cinco","seis","sete","oito","nove","dez","onze","doze","treze","quatorze","quinze","dezesseis","dezessete","dezoito","dezenove","vinte","vinte e um","vinte e dois","vinte e três","vinte e quatro","vinte e cinco","vinte e seis","vinte e sete","vinte e oito","vinte e nove","trinta","trinta e um","trinta e dois","trinta e três","trinta e quatro","trinta e cinco","trinta e seis","trinta e sete","trinta e oito","trinta e nove","quarenta","quarenta e um","quarenta e dois","quarenta e três","querenta e quatro","quarenta e cinco","quarenta e seis","quarenta e sete","quarenta e oito","quarenta e nove","cinquenta","cinquenta e um","cinquenta e dois","cinquenta e três","cinquenta e quatro","cinquenta e cinco","cinquenta e seis","cinquenta e sete","cinquenta e oito","conqueta e nove"]

let agora = new Date()
let hora = agora.getHours()
let minuto = agora.getMinutes()

let horat = horas[hora]
let horad = horat + " horas"

let minutot = minutos[minuto]
let minutod = ", " + minutot + " minutos."

if (horat == "Zero" || horat == "Uma") {
    horad = horat + " hora"
}

if (minutot == "zero") {
    minutod = "."
}

if (minutot == "um") {
    minutod = ", um minuto."
}

let extenso = horad + minutod

console.log(extenso)
