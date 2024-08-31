var express = require('express');
var router = express.Router();

const mainController = require('../controllers/mainController');

// Ruta Home Page
router.get('/', function(req, res, next) {
  res.send('Aquí encontrarás algunos de los científicos y matemáticos destacados en el mundo de la ciencia y de la programación. Esperamos te sorprendas');
});

// Ruta de créditos
router.get('/creditos', mainController.creditos);

module.exports = router;