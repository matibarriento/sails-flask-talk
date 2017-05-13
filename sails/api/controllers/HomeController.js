/**
 * HomeController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	home: function(req, res) {
		var users= [{
				name: 'Damián',
				id: 1
			}, {
				name: 'Matías',
				id: 2
			}];

		return res.view('home/index', { users : users, title: "Hola" });
	},
	otraCosa: function(req, res){
		return res.json({ damian: "pe"});
	},
	send: function(req, res){
	 	return res.send('<b>Otra cosa</b><br><ul><li>hola</li></ul>');
	}
};
