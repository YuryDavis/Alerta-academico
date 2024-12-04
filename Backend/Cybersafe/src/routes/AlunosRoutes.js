const express = require('express');
const router = express.Router();
const AlunoController = require('../controllers/AlunoController');


router.get('/find', AlunoController.findAll);
router.get('/:mat', AlunoController.findByMat);
router.get('/media', AlunoController.mediaGeral);
router.post('/create', AlunoController.createAluno);


module.exports = router