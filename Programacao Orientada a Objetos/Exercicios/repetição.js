const personagem = [

    {
        nome: "Tony Stark",
        codinome: "Homen de Ferro",
        armaPrincipal: "raio repulsores",
        armaSecundaria: "mini-mísseis",
        velocidade: 100,
        força: 70,
        resistencia: 65,
        descrição: function (){
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma principal: " + this.armaPrincipal + "\n"
                + "Arma secundaria:  " + this.armaSecundaria + "\n"
                + "Nivel de força: " + this.força + "\n"
                + "Nível de velocidade: " + this.velocidade + "\n"
                + "Nível de resistência: " + this.resistencia + "\n"
        },
        descrição2: function() {
                return `${this.nome}, codinome ${this.codinome}, utiliza como arma principal ${this.armaPrincipal}, e como arma secundaria ${this.armaSecundaria}, seu nivel de força é: ${this.força}, sua resistencia: ${this.resistencia}, e sua velocidade: ${this.velocidade}, o`;
            }
        
    
    },
    {
        nome: "Steve Rogers",
        codinome: "Capitão América",
        armaPrincipal: "um escudo",
        armaSecundaria: "seus punhos",
        velocidade: 65,
        força: 75,
        resistencia: 85,
        descrição: function (){
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma principal: " + this.armaPrincipal + "\n"
                + "Arma secundaria:  " + this.armaSecundaria + "\n"
                + "Nivel de força: " + this.força + "\n"
                + "Nível de velocidade: " + this.velocidade + "\n"
                + "Nível de resistência: " + this.resistencia + "\n"
        },
        descrição2: function() {
                return `${this.nome}, codinome ${this.codinome}, utiliza como arma principal ${this.armaPrincipal}, e como arma secundaria ${this.armaSecundaria}, seu nivel de força é: ${this.força}, sua resistencia: ${this.resistencia}, e sua velocidade: ${this.velocidade}, o`;
            }
    
    },
    {
        nome: "Thor",
        codinome: "Thor",
        armaPrincipal: "o martelo Mjolnir",
        armaSecundaria: "Raios",
        velocidade: 70,
        força: 85,
        resistencia: 60,
        descrição: function (){
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma principal: " + this.armaPrincipal + "\n"
                + "Arma secundaria:  " + this.armaSecundaria + "\n"
                + "Nivel de força: " + this.força + "\n"
                + "Nível de velocidade: " + this.velocidade + "\n"
                + "Nível de resistência: " + this.resistencia + "\n"
        },
        descrição2: function() {
                return `${this.nome}, codinome ${this.codinome}, utiliza como arma principal ${this.armaPrincipal}, e como arma secundaria ${this.armaSecundaria}, seu nivel de força é: ${this.força}, sua resistencia: ${this.resistencia}, e sua velocidade: ${this.velocidade}, o`;
            }
    
    },
    {
        nome: "Bruce Banner",
        codinome: "Hulk",
        armaPrincipal: "força bruta",
        armaSecundaria: "",
        velocidade: 70,
        força: 90,
        resistencia: 100,
        descrição: function (){
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma principal: " + this.armaPrincipal + "\n"
                + "Arma secundaria:  " + this.armaSecundaria + "\n"
                + "Nivel de força: " + this.força + "\n"
                + "Nível de velocidade: " + this.velocidade + "\n"
                + "Nível de resistência: " + this.resistencia + "\n"
        },
        descrição2: function() {
                return `${this.nome}, codinome ${this.codinome}, sua unica arma é ${this.armaPrincipal}, seu nivel de força é: ${this.força}, sua resistencia: ${this.resistencia}, e sua velocidade: ${this.velocidade}, o`;
            }
    
    },
    {
        nome: "Natasha Romanoff",
        codinome: "Viúva Negra",
        armaPrincipal: "pistolas",
        armaSecundaria: "braceletes de choque",
        velocidade: 39,
        força: 23,
        resistencia: 30,
        descrição: function (){
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma principal: " + this.armaPrincipal + "\n"
                + "Arma secundaria:  " + this.armaSecundaria + "\n"
                + "Nivel de força: " + this.força + "\n"
                + "Nível de velocidade: " + this.velocidade + "\n"
                + "Nível de resistência: " + this.resistencia + "\n"
        },
        descrição2: function() {
                return `${this.nome}, codinome ${this.codinome}, utiliza como arma principal ${this.armaPrincipal}, e como arma secundaria ${this.armaSecundaria}, seu nivel de força é: ${this.força}, sua resistencia: ${this.resistencia}, e sua velocidade: ${this.velocidade}, a`;
            }
    
    },
    {
        nome: "Clint Barton",
        codinome: "Gavião Arqueiro",
        armaPrincipal: "um arco e flecha",
        armaSecundaria: "",
        velocidade: 20,
        força: 25,
        resistencia: 35,
        descrição: function (){
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma principal: " + this.armaPrincipal + "\n"
                + "Arma secundaria:  " + this.armaSecundaria + "\n"
                + "Nivel de força: " + this.força + "\n"
                + "Nível de velocidade: " + this.velocidade + "\n"
                + "Nível de resistência: " + this.resistencia + "\n"
        },
        descrição2: function() {
                return `${this.nome}, codinome ${this.codinome}, utiliza como arma principal ${this.armaPrincipal}, seu nivel de força é: ${this.força}, sua resistencia: ${this.resistencia}, e sua velocidade: ${this.velocidade}, o`;
            }
    
    },
    
    {
        nome: "Thanos",
        codinome: "Titã Louco",
        armaPrincipal: "a manopla do infinito",
        armaSecundaria: "uma espada dupla",
        velocidade: 75,
        força: 100,
        resistencia: 86,
        descrição: function (){
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma principal: " + this.armaPrincipal + "\n"
                + "Arma secundaria:  " + this.armaSecundaria + "\n"
                + "Nivel de força: " + this.força + "\n"
                + "Nível de velocidade: " + this.velocidade + "\n"
                + "Nível de resistência: " + this.resistencia + "\n"
        },
        descrição2: function() {
                return `${this.nome}, codinome ${this.codinome}, utiliza como arma principal ${this.armaPrincipal}, e como arma secundaria ${this.armaSecundaria}, seu nivel de força é: ${this.força}, sua resistencia: ${this.resistencia}, e sua velocidade: ${this.velocidade}, o`;
            }
        
    
    }
    
    
    ]
    
    //media
    personagem.forEach(item => {
    item.media = (item.velocidade + item.força + item.resistencia) / 3;
    });
    
    
    //Derrotados    
    personagem.forEach(item => {
    const derrotados = personagem.filter(x => x.media < item.media)
        .map(x => x.codinome);
    
    if (derrotados.length > 0) {
        console.log(`${item.descrição2()} ${item.codinome} consegue derrotar ${derrotados.join(', ')}`);
    } else {
        console.log(`${item.descrição2()} ${item.codinome} consegue derrotar ninguem ${derrotados.join(', ')}`);
    }
    });
