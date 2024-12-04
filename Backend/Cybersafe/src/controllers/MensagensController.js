const Mensagem = require('../models/Mensagens');
const Alunos = require('../models/Alunos');
const { Types } = require('mongoose');

module.exports = class MensagensController {

    static async findAll(req, res) {
        const msgs = await Mensagem
            .find();
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

            if (!aluno || aluno.length === 0) {
                return res.status(404).json({ message: 'Nenhuma mensagem encontrada para este aluno' });
            }

            const idAluno = aluno._id;
           
            const mensagens = await Mensagem.find({ alunoId: idAluno });

            return res.status(200).json({ mensagens: mensagens , aluno: aluno});
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

    static async create(req, res){
        const mensagem = new Mensagem;
        const mat = req.params.mat;
        const aluno = await Alunos.findOne({ 'matricula': mat });

        if (!aluno || aluno.length === 0) {
            return res.status(404).json({ message: 'Nenhuma mensagem encontrada para este aluno' });
        }

        const idAluno = aluno._id;

        try {
            mensagem.titulo = req.body.titulo;
            mensagem.descricao = req.body.descricao;
            mensagem.alunoId = new Types.ObjectId(idAluno);
            mensagem.save();
            res.status(201).json({Mensagem: mensagem})
        } catch (err) {
            console.error(err);
        }
    }

}
