/**
 * HomeController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	home: function(req, res) {
		var users= {
			users: [{
				name: 'Thelma',
				id: 1
			}, {
				name: 'Leonardo',
				id: 2
			}]
		};

		return res.view('home/index', { users : users, title: "Hola" });
	},
};