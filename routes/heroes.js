var express = require('express');
var router = express.Router();
const heroeController = require('../controllers/heroeController');

// Ruta para mostrar el listado de héroes
router.get('/', heroeController.listadoHeroes);

// Ruta para mostrar el detalle de un héroe por ID
router.get('/detalle/id/:id', heroeController.detalleHeroe);

// Ruta para ejercicio 4
router.get('/bio/id/:id/:ok?', heroeController.bioHeroe);


module.exports = router;
  