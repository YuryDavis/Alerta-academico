
function calcMediaGral(alunos){

  let geral = 0;
  let mediaAlunos = 0;

        alunos.forEach(aluno => {
            if (aluno.media !== undefined && aluno.media !== null) {
                geral += aluno.media;
            }
        });
        mediaAlunos = geral/alunos.length
 return mediaAlunos.toFixed(2);

}

module.exports = calcMediaGral;