class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
}

let heroi = new hero("Gabriel", "26", "ninja")

switch (heroi.tipo) {
    case "mago":
        console.log(`O ${heroi.tipo} ${heroi.nome} atacou usando magia`)
        break

    case "guerreiro":
        console.log(`O ${heroi.tipo} ${heroi.nome} atacou usando espada`)
        break

    case "monge":
        console.log(`O ${heroi.tipo} ${heroi.nome} atacou usando artes marciais`)
        break

    case "ninja":
        console.log(`O ${heroi.tipo} ${heroi.nome} atacou usando shuriken`)
        break
}