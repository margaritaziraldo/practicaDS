const science = require("../db/science");

const heroeController = {
  listadoHeroes: function(req, res) {
      res.render('index', { title: 'Listado de Héroes', listadoHeroes: science.lista });
  },

  detalleHeroe: function(req, res) {
      const id = req.params.id;
      let heroeEncontrado = []; 

      for (let i = 0; i < science.lista.length; i++) {
          if (science.lista[i].id == id) { 
              heroeEncontrado.push(science.lista[i]); 
          }
      }

      if (heroeEncontrado.length > 0) {
          res.render('detalle', { nombre: heroeEncontrado[0].nombre, profesion: heroeEncontrado[0].profesion });
      } else {
          res.render('error', { message: 'No encontramos al científico indicado. Por favor, elija otro id.' });
      }
  },

  bioHeroe: function(req, res) {
    const id = req.params.id;
    const ok = req.params.ok;
    let heroeEncontrado = [];

    for (let i = 0; i < science.lista.length; i++) {
        if (science.lista[i].id == id) {
            heroeEncontrado.push(science.lista[i]);
        }
    }

    if (heroeEncontrado.length > 0) {
      if (ok === 'ok') {
        res.render('bio', { nombre: heroeEncontrado[0].nombre, resenia: heroeEncontrado[0].resenia, mensaje: null });
      } else {
        res.render('bio', { nombre: heroeEncontrado[0].nombre, resenia: null, mensaje: "Lamento que no desees saber más de mí :(" });
      }
  } else {
    res.render('error', { message: 'No encontramos al científico indicado para mostrar su biografía.' });
  }
}
};


module.exports = heroeController;