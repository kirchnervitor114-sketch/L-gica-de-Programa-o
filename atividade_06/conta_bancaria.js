 class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    verSaldo() {
        console.log(`
            Olá ${this.titular},
            seu saldo atual é 
            R$ ${this.saldo}`)

        }
    }

    let contaDaEloá = new ContaBancaria("Eloá", 15000)
    contaDaEloá.verSaldo()

    depositar(valor)
        this.saldo += valor;
        
