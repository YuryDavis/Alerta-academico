const Alunos = require('../models/AlunoModel');

module.exports = class AlunoController {

    static async showAlunos(req, res){
        const alunos = await Alunos.find();

       res.send({alunos})
    }
}