class ContaBancaria {
    constructor(titular, saldo) {
        var titular = "Matheus"
        this.titular = titular;
        this.saldo = saldo;
    }
    verSaldo() {
        console.log(`
            Olá ${this.titular},
            seu saldo atual é
            R$ ${this.saldo}`)
    }

    depositar(valor) {
        this.saldo += valor;
    }
    sacar(){
        this.saldo -= valor;
    }
}

let contaDoMatheus = new ContaBancaria("Matheus", 23000)
contaDoMatheus.verSaldo()
contaDoMatheus.depositar(500)
contaDoMatheus.verSaldo()
let contaDoPinheiro = new ContaBancaria("Pinheiro", 300000)
contaDoPinheiro.verSaldo()