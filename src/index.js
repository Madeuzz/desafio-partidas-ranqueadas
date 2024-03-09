//Função que retorna o valor de saldo pontuação de vitórias.
function ranqueada(name,win,lose){
    let i = 0
    console.log(`Seja Bem-Vindo ${name}! Sua partida já irá começar!`)
    //Estrutura de repetição.
    do{
        if((i % 2) === 0){
            console.log(`PARABÉNS VOCê VENCEU: OBTIDO 3 PONTOS RANQUEADOS!`)
            win += 3
        }else{
            console.log(`Infelizmente não foi desta vez: Perdido 1 ponto ranqueado.`)
            lose++
        }
        saldo = win - lose
        i ++
    }while( i < 20 ) 
    return saldo
}

//Função que retorna o Elo atual do herói.
function rateElo (){

    let elo =""
    //Estruturas de decisão
    if(rate < 10){
        elo = "Ferro"
    }else if(rate >= 11 && rate <= 20){
        elo = "Bronze"
    }else if(rate >= 21 && rate <= 50){
        elo = "Prata"
    }else if(rate >= 51 && rate <= 80){
        elo = "Ouro"
    }else if(rate >= 81 && rate <= 90){
        elo = "Diamante"
    }else if(rate >= 91 && rate <= 100){
        elo = "Lendário"
    }else if(rate >= 101){
        elo = "Imortal"
    }
    return elo
}

// Variaveis.
let hero = "Madeuz"
let rate = ranqueada(hero,90,16)
let level = rateElo()

//Interpolação de Strings
console.log(`O Herói ${hero} tem o saldo de ${rate} vitórias e está no nível ${level}.`)