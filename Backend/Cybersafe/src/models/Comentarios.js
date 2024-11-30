const mongoose = require('mongoose')
const {Schema} = mongoose

const ComentarioSchema = new Schema({
        aluno: {type: mongoose.Schema.Types.ObjectId, ref: 'Alunos' },
        titulo: {type: String, required: true},
        Descricao: {type: String, required: true}
    })
const Comentarios = mongoose.model('Comentarios', ComentarioSchema);
module.exports = Comentarios