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
    

}