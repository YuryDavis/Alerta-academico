const mongoose = require('mongoose');
const {Schema} = mongoose;

const AlunoModel = mongoose.model(
    'Alunos',
    new Schema({
        name: {type: String, required: true},
        matricula: {type: String, required: true},
        media: {type: Number},
        frequencia: {type: String},
        disciplinas: 
            [{
                nome: {type: String},
                media: {type: Number},
                frequencia: {type: String}
            }]
    },{versionKey: false})
)

module.exports = AlunoModel