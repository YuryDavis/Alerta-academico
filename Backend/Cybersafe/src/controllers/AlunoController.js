const Alunos = require('../models/Alunos');

module.exports = class AlunoController {

    static async findAll(req, res){
        const alunos = await Alunos.find();
        
       res.send({alunos})
    }

    static async findByMat(req, res){
        const mat = req.params.mat;
        console.log(mat)
        const aluno = await Alunos.findOne( {matricula: {$eq: mat}});

        res.send({aluno});
    }

    static async createAluno(req, res){
        const newAluno = new Alunos;

        if(!newAluno){
           return res.status(400).json({message: 'Aluno inválido'});
        }

        try {
            newAluno.name = req.body.name;
            newAluno.matricula = req.body.matricula;
            newAluno.media = req.body.media;
            newAluno.disciplinas = req.body.disciplinas;
            newAluno.frequencia = req.body.frequencia;
            newAluno.save();

            return res.status(201).json({Aluno: newAluno});
        } catch (err) {
            console.error('Error retrieving messages:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
    
    static async mediaGeral(req, res){
        const alunos = await Alunos.find();
        const geral = alunos.map(aluno => {
            if(aluno.media != undefined || aluno.media != null){
                geral += aluno.media;
            }
            
        })

        return res.status(200).json({geral});
    }

}