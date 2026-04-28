class Animal {
    constructor(apelido) {
        this.nome = apelido;
    }
    falar(som) {
        console.log(som);
    }
}
class Gato extends Animal {
    ronronar() {
        console.log(`o ${this.nome} está ronronando`)
    }
}
class Cachorro extends Animal {
    abanarRabo() {
        console.log(`O ${this.nome} está feliz`)
    }
}
    class Leão extends Animal {
    rugir() {
        console.log(`o ${this.nome} está rugindo`)
    }

}
let lino = new Gato("Lino");
let pandora = new Cachorro("Pandora");
let Simba = new Leão("Simba")

lino.falar("Miau!");
pandora.falar("Au Au!");
Simba.falar("Roar!")

lino.falar("Miau!");
lino.ronronar();
pandora.falar("Au Au!");
pandora.abanarRabo();
Simba.falar("Roar!");
Simba.rugir();
