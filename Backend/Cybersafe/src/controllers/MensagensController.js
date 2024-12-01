const Mensagem = require('../models/Mensagens');
const MensagemDTO = require('../models/dto/MensagemDTO');

module.exports = class MensagensController {
  
  static async findAll(req, res){
    const msgs = await Mensagem
        .find();
    res.send({msgs});
  }
  
  
  static async findByAlunoMatricula(req, res) {
    const { mat: matricula } = req.params;
    try {
        const mensagens = await Mensagem.find({ aluno: matricula }).populate('alunos').exec();

        console.log(mensagens); 

        if (!mensagens || mensagens.length === 0) {
            return res.status(404).json({ message: 'No messages found for this student' });
        }

        const mensagemDTO = mensagens.map(MensagemDTO);

        return res.status(200).json({ mensagens: mensagemDTO }); 
    } catch (err) {
        console.error('Error retrieving messages:', err); 
        return res.status(500).json({ message: 'Internal server error' });
    }
}

  
}
