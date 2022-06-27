const Refrigerante = 11.99;
const Macarrao = 6.99;
const Ervilha = 6.99;
const Arroz = 22.99;
const Feijao = 11.89;
const Vinho = 70.00;


let totalRefri = Refrigerante * 3
let totalMacarrao = Macarrao * 4
let totalErvilha = Ervilha * 3
let totalArroz  = Arroz * 3
let totalFeijao =  Feijao * 2
let totalVinho = Vinho * 3


let total = totalRefri + totalMacarrao + totalErvilha + totalArroz + totalFeijao + totalVinho;


function verificaParImpar(total){

    if(total % 2 == 0){
        console.log(`Um pagará ${total / 2 - totalVinho} e o outro amigo pagará ${total / 2 + totalVinho}`)
        
        

    }else{
        console.log(`Um amigo pagará ${total / 2} e o outro amigo pagará ${total / 2}`)

    
    }


}
verificaParImpar(total)

function compras (total){
    let precoRefrigerante = parseFloat(prompt("Digite o valor do refrigerante"))
    let quantidadeRefrigerante = parseInt(prompt("Quantas Unidades ?"))
    let totalRefri = precoRefrigerante * quantidadeRefrigerante
    let precoMacarrao = parseFloat(prompt("Digite o valor do macarrão"))
    let quantidadeMacarrao = parseInt(prompt("Quantas Unidades ?"))
    let totalMacarrao = precoMacarrao * quantidadeMacarrao
    let precoErvilha = parseFloat(prompt("Digite o valor do Ervilha"))
    let quantidadeErvilha = parseInt(prompt("Quantas Unidades ?"))
    let totalErvilha = precoErvilha * quantidadeErvilha
    let precoArroz = parseFloat(prompt("Digite o valor do arroz"))
    let quantidadeArroz = parseInt(prompt("Quantas Unidades ?"))
    let totalArroz = precoArroz * quantidadeArroz
    let precoFeijao = parseFloat(prompt("Digite o valor do feijão"))
    let quantidadeFeijao = parseInt(prompt("Quantas Unidades ?"))
    let totalFeijao = precoFeijao * quantidadeFeijao
    let precoVinho = parseFloat(prompt("Digite o valor do vinho"))
    let quantidadeVinho = parseInt(prompt("Quantas Unidades ?"))
    let totalVinho = precoVinho * quantidadeVinho

    total = totalRefri + totalMacarrao + totalErvilha + totalArroz + totalFeijao + totalVinho;

    alert(`Valor total a ser pago: ${total}`)
    console.log(`Valor total a ser pago: ${total}`)
    
}

compras(total)






