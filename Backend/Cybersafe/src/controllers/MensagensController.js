const Mensagem = require('../models/Mensagens');
const Alunos = require('../models/Alunos');

module.exports = class MensagensController {

    static async findAll(req, res) {
        const msgs = await Mensagem
            .find().populate('aluno').exec();
        res.send({ msgs });
    }


    static async findByAlunoMatricula(req, res) {
        const { mat: matricula } = req.params;

        if (!matricula || matricula.trim().length === 0) {
            return res.status(400).json({ message: "Matrícula inválida" });
        }

        try {

            const matriculaConvertida = String(matricula);


            const aluno = await Alunos.findOne({ 'matricula': matriculaConvertida });
            console.log(aluno)

            if (!aluno || aluno.length === 0) {
                return res.status(404).json({ message: 'No messages found for this student' });
            }

            const idAluno = aluno._id;
            console.log(idAluno)
            const mensagens = await Mensagem.find({ alunoId: idAluno });

            return res.status(200).json({ mensagens: mensagens });
        } catch (err) {
            console.error('Error retrieving messages:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }


    static async findById(req, res) {
        const id = req.params.id;
        const msg = await Mensagem.findOne({ _id: id })
        return res.status(200).json({ msg })
    }


}
