function calcFrequenciaGeral(alunos){
  let geral = 0;
  let media = 0;

  alunos.forEach(aluno => {
    if (aluno.frequencia !== undefined && aluno.frequencia !== null) {
      geral += Number(aluno.frequencia.replace(/\D/g, ''));
    }
  });
  media = geral/alunos.length;
  return media.toFixed(2);
}

module.exports = calcFrequenciaGeral;