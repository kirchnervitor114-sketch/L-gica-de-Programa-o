class animal {
    constructor(apelido) {
        this.nome = apelido;
    }
        falar (som){
        console.log(som);
    }
}

class gato extends animal {
    ronronar(){
        console.log(`o ${this.nome} está ronronando`)
    }
}

class cachorro extends animal {
    latir(){
        console.log(`o ${this.nome} está latindo`)
    }
}

let lino = new gato("Lino");
let pandora = new cachorro("Pandora");

lino.falar("Miau");
lino.ronronar();
pandora.falar("Au au");
pandora.latir();