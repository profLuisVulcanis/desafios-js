/**
 * Canal do Prof. Luis Vulcanis
 * 
 * Desafio 02
 * 
 * Como retornar um numero inteiro de quatro digitos
 * sem utilizar nenhum numeral no código javascript
 */

const um = Math.PI/Math.PI
const dois = um + um
const tres = um + dois
const quatro = dois + dois
const cinco = dois + tres
const seis = tres + tres
const sete = tres + quatro
const oito = quatro + quatro
const nove = quatro + cinco
const dez = cinco + cinco

const unidade = cinco
const dezena = dez * sete
const centena = dez * dez * dois
const milhar = dez * dez * dez * tres

let numero = milhar + centena + dezena + unidade

console.log(numero)
