const heroi = {
    nome: "Phoenix",
    nivel: "",
    vitorias: 30,
    derrotas: 12,
}

function calcularSaldoRankeadas({ vitorias, derrotas } ){
    const saldo = vitorias - derrotas;
    return saldo;
}

const saldoDeRankeadas = calcularSaldoRankeadas(heroi);

switch(true) {
    case saldoDeRankeadas >= 101:
        heroi.nivel = "Imortal"
    break;
    case saldoDeRankeadas >= 91:
        heroi.nivel = "Lendário"
    break;
    case saldoDeRankeadas >= 81:
        heroi.nivel = "Diamante"
    break;
    case saldoDeRankeadas >= 51:
        heroi.nivel = "Ouro"
    break;
    case saldoDeRankeadas >= 21:
        heroi.nivel = "Prata"
    break;
    case saldoDeRankeadas >= 11:
        heroi.nivel = "Bronze"
    break;
    case saldoDeRankeadas <= 10:
        heroi.nivel = "Imortal"
    break;
    default:
        heroi.nivel = ""
}

console.log(`O Herói ${heroi.nome} tem saldo de ${saldoDeRankeadas} está no nível de ${heroi.nivel} `)