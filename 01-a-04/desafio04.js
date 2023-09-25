/**
 * Canal do Prof Luis Vulcanis
 * 
 * Desafio Javscript 04
 * 
 * Calcular Juro Composto
  */

let montante = null
let capital = 1000
let taxapercentual = 10
let taxadecimal = taxapercentual / 100
let tempo = 5
let base = 1 + taxadecimal
let multiplicador = Math.pow(base, tempo)
montante = capital * multiplicador
let montanteReal = montante.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
let parcela = montante / tempo
let parcelaReal = parcela.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

let resultado = "Valor total de " + montanteReal + " dividido em " + tempo + " parcelas de " + parcelaReal

console.log(resultado)
