const express = require('express');
const router = express.Router();
const MensagensController = require('../controllers/MensagensController');


router.get('/', MensagensController.findAll);
router.get('/:mat', MensagensController.findByAlunoMatricula);

module.exports = router;