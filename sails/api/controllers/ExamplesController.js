/**
 * ExamplesController
 *
 * @description :: Server-side logic for managing Examples
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getJson: function(req, res) {
		return res.json({
			name: "Ejemplo"
		});
	},
	getView: function(req, res) {
		return res.view('examples/unaView', {
			message: 'Un Mensaje desde el servidor',
			title: "Hola"
		});
	},
	postName: function(req, res) {
		if (req.method.toUpperCase() != 'POST') {
			return res.notFound();
		}

		var params = req.params.all()

		return res.json({
			fullName: params.name + ' ' + params.lastName
		});
	}
};