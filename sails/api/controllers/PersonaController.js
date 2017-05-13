/**
 * PersonaController
 *
 * @description :: Server-side logic for managing People
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	add: function(req, res) {
		var persona = req.params.all()

		Persona.create({
			name: persona.name,
			lastName: persona.lastName
		}).exec(function createCB(err, nuevaPersona) {
			return res.ok(nuevaPersona);
		});
	},
	getAll: function(req, res) {
		Persona.find().exec(function(err, personas) {
			return res.json(personas);
		});
	},
	getAllView: function(req, res) {
		Persona.find().exec(function(err, personas) {
			return res.view('persona/index', { personas:  personas } );
		});
	}
};