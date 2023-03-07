class Pessoa {
    nome: string;
    idade: number;
    profissao: string;
  
    constructor(nome: string, idade: number, profissao: string) {
      this.nome = nome;
      this.idade = idade;
      this.profissao = profissao;
    }
  }
  
  let pessoa1 = new Pessoa("maria", 29, "atriz");
  let pessoa2 = new Pessoa("roberto", 19, "Padeiro");
  let pessoa3 = new Pessoa("laura", 32, "Atriz");
  let pessoa4 = new Pessoa("carlos", 19, "padeiro");