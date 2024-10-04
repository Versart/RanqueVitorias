export default class ClassificadorRank {


    static calculaSaldoVitorias(heroi) {
        let saldoVitoria = heroi.vitoria - heroi.derrota;
        if(heroi.vitoria < 10) {
            return `O heroi tem saldo de ${saldoVitoria} está no nível Ferro`;
        }
        else if(heroi.vitoria > 10 && heroi.vitoria <= 20) {
            return `O heroi tem saldo de ${saldoVitoria} está no nível Bronze`;
        }
        else if(heroi.vitoria > 20 && heroi.vitoria <= 50) {
            return `O heroi tem saldo de ${saldoVitoria} está no nível Prata`;
        }
        else if(heroi.vitoria > 50 && heroi.vitoria <= 80) {
            return `O heroi tem saldo de ${saldoVitoria} está no nível Ouro`;
        }
        else if(heroi.vitoria > 80 && heroi.vitoria <= 90) {
            return `O heroi tem saldo de ${saldoVitoria} está no nível Damante`;
        }
        else if(heroi.vitoria > 90 && heroi.vitoria <= 100) {
            return `O heroi tem saldo de ${saldoVitoria} está no nível Lendário`;
        }
        else{
            return `O heroi tem saldo de ${saldoVitoria} está no nível Imortal`;
        }
    }
}