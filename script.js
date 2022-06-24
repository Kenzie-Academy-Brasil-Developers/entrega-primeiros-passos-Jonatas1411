let Refrigerante = 11.99;
let Macarrao = 6.99;
let Ervilha = 6.99;
let Arroz = 22.99;
let Feijao = 11.89;
const Vinho = 70.00;

let quantidadeRefri = 3;
let quantidadeMacarrao = 4;
let quantidadeErvilha = 3;
let quantidadeArroz = 3;
let quantidadeFeijao = 2;
let quantidadeVinho = 3;

totalRefri = Refrigerante * quantidadeRefri
totalMacarrão = Macarrao * quantidadeMacarrao
totalErvilha = Ervilha * quantidadeErvilha
totalArroz  = Arroz * quantidadeArroz
totalFeijão =  Feijao * quantidadeFeijao
totalVinho = Vinho * quantidadeVinho

let valorTotalRefri = 35.97;
let valorTotalMacarrao = 27.96;
let valorTotalErvilha = 20.97;
let valorTotalArroz = 68.97;
let valorTotalFeijao = 23.78;
let valorTotalVinho = 210;



total = valorTotalRefri + valorTotalMacarrao + valorTotalErvilha + valorTotalArroz + valorTotalFeijao + valorTotalVinho;

function verificaParImpar(numero){

    if(numero % 2 == 0){
        console.log(`${numero} é um numero par`)
        
        

    }else{
        console.log(`${numero} é um numero impar`)

    
    }

let precoRefrigerante = parseFloat(prompt("Digite o valor do refrigerante")) 
let quantidadeRefri = parseInt(prompt("Quantas Unidades ?"))

total = Refrigerante * quantidadeRefri

alert(`Valor total a ser pago: ${total}`)

let precoMacarrao = parseFloat(prompt("Digite o valor do macarrão"))
let quantidadeMacarrao = parseInt(prompt("Quantas Unidades ?"))

total = Macarrao * quantidadeMacarrao

alert (`Valor total a ser pago: ${total}`)



let precoErvilha = parseFloat(prompt("Digite o valor da ervilha"))
let quantidadeErvilha = parseInt(prompt("Quantas Unidades ?"))

total = Ervilha * quantidadeErvilha

alert(`Valor total a ser pago: ${total}`)

let precoArroz = parseFloat(prompt("Digite o valor do arroz"))
let quantidadeArroz = parseInt(prompt("Quantas Unidades ?"))

total = Arroz * quantidadeArroz

alert(`Valor total a ser pago: ${total}`)

let precoFeijao = parseFloat(prompt("Digite o valor do feijão"))
let quantidadeFeijao = parseInt(prompt("Quantas Unidades ?"))

total = Feijao * quantidadeFeijao

alert(`Valor total a ser pago: ${total}`)

let precoVinho  = parseFloat(prompt("Digite o valor do vinho"))
let quantidadeVinho = parseInt(prompt("Quantas Unidades ?"))

total = Vinho * quantidadeVinho

alert(`Valor total a ser pago: ${total}`)



}
verificaParImpar(total)







