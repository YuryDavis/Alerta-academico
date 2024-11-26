const mongoose = require('mongoose')
const {Schema} = mongoose

const AlunoModel = mongoose.model(
    'Alunos',
    new Schema({
        name: {type: String, required: true},
        matricula: {type: Number, required: true},
        observacoes: {type: String, required: true},
    })
)

module.exports = AlunoModel