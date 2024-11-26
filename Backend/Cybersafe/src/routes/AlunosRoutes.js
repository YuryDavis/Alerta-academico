const express = require('express');
const router = express.Router();

const AlunoController = require('../controllers/AlunoController')
router.get('/', AlunoController.showAlunos);

module.exports = router