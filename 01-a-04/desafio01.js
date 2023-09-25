/**
 * Canal do Professor Luis
 * 
 * Desafio proposto em Javascript
 * 
 * Como mostrar números de 1 (um) até 100 (cem)
 * sem utilizar nenhum número inteiro no código?
 * 
 * umidade = 1
 * limite = 100
 * 
 * Math.PI
 */
const constante = Math.PI
let unidade = constante/constante
let limite = (constante * constante * constante * constante) + constante

for (i = unidade; i < limite; i++) {
    console.log(i)
}
