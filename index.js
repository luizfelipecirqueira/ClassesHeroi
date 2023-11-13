class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'atacou';
        }

        const mensagem = `O ${this.tipo} ${ataque}`;
        document.write(mensagem);
        return mensagem;
    }
}

function criarHeroi() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const tipo = document.getElementById('tipo').value;

    const heroi = new Hero(nome, idade, tipo);
    if (nome != "" && idade != "" && tipo != "") {
        heroi.atacar();
    }
    else {
        alert("Preencha todos os campos!");
    }
}