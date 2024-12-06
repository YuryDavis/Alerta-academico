const express = require("express");
const router = express.Router();
const AlunoController = require("../controllers/AlunoController");

router.get("/find", AlunoController.findAll);
router.get("/:mat", AlunoController.findByMat);
router.post("/create", AlunoController.createAluno);

module.exports = router;
