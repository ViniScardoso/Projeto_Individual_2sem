var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimasCpu/:serialNumber", function (req, res) {
    medidaController.buscarUltimasMedidasCpu(req, res);
});

router.get("/tempo-realCpu/:serialNumber", function (req, res) {
    medidaController.buscarMedidasEmTempoRealCpu(req, res);
});

router.get("/ultimasRam/:serialNumber", function (req, res) {
    medidaController.buscarUltimasMedidasRam(req, res);
});

router.get("/tempo-realRam/:serialNumber", function (req, res) {
    medidaController.buscarMedidasEmTempoRealRam(req, res);
});

router.get("/ultimasDisco/:serialNumber", function (req, res) {
    medidaController.buscarUltimasMedidasDisco(req, res);
});

router.get("/maxDisco/:serialNumber", function (req, res) {
    medidaController.buscarMaxDisco(req, res);
});

router.get("/maxRam/:serialNumber", function (req, res) {
    medidaController.buscarMaxRam(req, res);
});

router.get("/ultimasRede/:serialNumber", function (req, res) {
    medidaController.buscarUltimasMedidasRede(req, res);
});

router.get("/tempo-realRede/:serialNumber", function (req, res) {
    medidaController.buscarMedidasEmTempoRealRede(req, res);
});

router.get("/tempo-realPacotes/:serialNumber", function (req, res) {
    medidaController.buscarMedidasEmTempoRealPacotes(req, res);
});

router.get("/obterDadosPlacaRede/:serialNumber", function (req, res) {
    medidaController.obterDadosPlacaRede(req, res);
});

router.get("/ultimosPacotes/:serialNumber", function (req, res) {
    medidaController.buscarUltimasMedidasPacotes(req, res);
});


module.exports = router;