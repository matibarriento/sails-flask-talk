/**
 * HelloController
 *
 * @description :: Server-side logic for managing helloes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	hello: function(req, res) {
		var params = req.params.all();

		if (params.name)
			return res.ok('Hello ' + params.name + '!');

		return res.ok('Hello, World!');
	},
	login: function(req, res) {
		if (req.method.toUpperCase() == 'POST') {
			return res.ok('do_the_login');
		} else if (req.method.toUpperCase() == 'GET') {
			return res.ok('show_the_login_form');
		}
		return res.notFound();
	}
};