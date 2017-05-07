/**
 * SessionController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	add: function(req, res) {

		var params = req.params.all()

		Message.create({
			name: params.name
		}).exec(function createCB(err, created) {
			//Invoco desde el servidor el socket, indicando que se agregó un elemento,
			//Retorno un json para mejor manejo del objeto.
			Message.publishCreate({
				id: created.id,
				name: created.name
			});
		});
	},
	get: function(req, res) {
		//Me suscribo al socket!
		Message.watch(req);
		
		//Obtengo los mensajes que se encuentran en el repositorio
		Message.find().exec(function(err, message) {
			return res.json(message);
		});
	},
	stream: function(req, res) {
		//De esta forma se retorna una vista!
		return res.view("message/stream");
	}
};