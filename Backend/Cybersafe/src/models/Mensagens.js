const mongoose = require('mongoose');
const {Schema} = mongoose

const MensagenSchema = new Schema({
        alunoId: {type: mongoose.Schema.Types.ObjectId, ref: 'Alunos' },
        titulo: {type: String, required: true},
        descricao: {type: String, required: true}, 
    },
    {timestamps: true});

    
module.exports = mongoose.model('Mensagens', MensagenSchema);
