const express = require("express");
const router = express.Router();
const AlunoController = require("../controllers/AlunoController");
const cors = require('cors')
const corsOptions = require('../middlewares/cors')


router.get("/find",cors(corsOptions), AlunoController.findAll);
router.get("/:mat",cors(corsOptions), AlunoController.findByMat);
router.post("/create",cors(corsOptions), AlunoController.createAluno);

module.exports = router;
