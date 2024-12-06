const express = require('express');
const router = express.Router();
const MensagensController = require('../controllers/MensagensController');
const cors = require('cors')
const corsOptions = require('../middlewares/cors')

router.get('/',cors(corsOptions), MensagensController.findAll);
router.get('/:mat',cors(corsOptions), MensagensController.findByAlunoMatricula);
router.post('/:mat',cors(corsOptions), MensagensController.create);
//router.get('/:id', MensagensController.findById);

module.exports = router;