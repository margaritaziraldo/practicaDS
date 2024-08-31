const mainController = {
    creditos: function(req, res) {
        res.render('creditos', { nombre: 'Margarita Ziraldo', leyenda: 'Hecho con mucho amor (y paciencia) en Prog 2' });
    }
};

module.exports = mainController;