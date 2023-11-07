let result;
let level;
function calculateWinsAndLosses(wins, losses) {
    result = wins - losses
    if (result <= 10) {
        level = "Ferro";
    } else if (result > 10 && result <= 20) {
        level = "Bronze";
    } else if (result > 20 && result <= 50) {
        level = "Prata";
    } else if (result > 50 && result <= 80) {
        level = "Ouro";
    } else if (result > 80 && result <= 90) {
        level = "Diamante";
    } else if (result > 90 && result <= 100) {
        level = "Lendário";
    } else if (result >= 101) {
        level = "Imortal";
    }
    return [result, level]
}


console.log(`O Herói tem o saldo de ${calculateWinsAndLosses(120, 2)[0]} e está no nível de ${calculateWinsAndLosses(120, 2)[1]}`)