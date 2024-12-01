class MensagemDTO {

  constructor(mensagen) {
    this.id = mensagen._id;
    this.titulo = mensagen.titulo;
    this.descricao = mensagen.descricao;
    this.mensagen.aluno.nome = mensagen.aluno.nome;
    this.mensagen.aluno.matricula = mensagen.aluno.matricula;
  }
}

module.exports = MensagemDTO;