var bodyParser = require('body-parser');

//publicPath for dev : /vue-learn/
//publicPath for production : /html/vue-learn-andreeva/
module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/html/vue-learn-andreeva/'
		: '/',

	devServer: {
		noInfo: true,
		overlay: true,
		//dev server:  post data while adding to team
		// before: function (app, server) {
			// app.use(bodyParser.json());
			// app.post('/server-add-team', function (req, res) {
				// let newTeam = addToTeam(req.body.team, req.body.member);
				// res.json(newTeam);
				// function addToTeam (team, member) {
				// 	let lastId = Number(team[team.length - 1].id) + 1;
				// 	let newMember = Object.assign({id: lastId}, member);
				// 	team.push(newMember);
				// 	return team;
				// };
			// });
		// }
	},
};