const express = require('express');
const router = express.Router();
const AlunoController = require('../controllers/AlunoController');


router.get('/find', AlunoController.findAll);
router.get('/:mat', AlunoController.findByMat);

module.exports = router