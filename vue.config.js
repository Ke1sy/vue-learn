var bodyParser = require('body-parser');

module.exports = {
	// mode: 'production',
	publicPath: process.env.NODE_ENV === 'production'
		? '/vue-learn/'
		: '/',
	devServer: {
		historyApiFallback: true,
		noInfo: true,
		overlay: true,
		before: function (app, server) {
			app.use(bodyParser.json());
			app.post('/server', function (req, res) {
				// let result;
				// var query = req.body.categories;
				// let categoriesVideos = [{
				// 	"id": "v-0",
				// 	"src": "/src/assets/category/1.jpg",
				// 	"title": "Illusion Crystal - Технология нанесения",
				// 	"href": "#",
				// 	"category": "deephouse"
				// }, {
				// 	"id": "v-0",
				// 	"src": "/src/assets/category/1.jpg",
				// 	"title": "Illusion Crystal - Технология нанесения",
				// 	"href": "#",
				// 	"category": "deephouse"
				// },{
				// 	"id": "v-1",
				// 	"src": "/src/assets/category/2.png",
				// 	"title": "Illusion Crystal - Технология нанесения",
				// 	"href": "#",
				// 	"category": "corporative"
				// }, {
				// 	"id": "v-2",
				// 	"src": "/src/assets/category/3.jpg",
				// 	"title": "Illusion Crystal - Технология нанесения",
				// 	"href": "#",
				// 	"category": "video-lessons"
				// }, {
				// 	"id": "v-3",
				// 	"src": "/src/assets/category/4.jpg",
				// 	"title": "Illusion Crystal - Технология нанесения",
				// 	"href": "#",
				// 	"category": "rock"
				// }];
				// function gatherVideo(arr) {
				// 	let selectedVideos = [];
				// 	arr.forEach(function(el, i) {
				// 		categoriesVideos.filter(function (item) {
				// 			if(item.category === el) {
				// 				selectedVideos.push(item);
				// 			}
				// 		});
				// 	});
				// 	return selectedVideos;
				// };
				// if (query && query.length === 1) {
				// 	let single = query[0];
				// 	switch (single) {
				// 		case 'rock':
				// 			result = {
				// 				"videos": gatherVideo(query),
				// 				"redirect": true,
				// 				"redirectUrl": "http://localhost:8080/filter/rubrics-rock"
				// 			};
				// 			break;
				//
				// 		case 'corporative':
				// 			result = {
				// 				"videos": gatherVideo(query),
				// 				"redirect": true,
				// 				"redirectUrl": "http://localhost:8080/filter/rubrics-corporative"
				// 			};
				// 			break;
				// 		case 'deephouse':
				// 			result = {
				// 				"videos": gatherVideo(query),
				// 				"redirect": true,
				// 				"redirectUrl": "http://localhost:8080/filter/rubrics-deephouse"
				// 			};
				// 			break;
				// 		case 'video-lessons':
				// 			result = {
				// 				"videos": gatherVideo(query),
				// 				"redirect": true,
				// 				"redirectUrl": "http://localhost:8080/filter/rubrics-video-lessons"
				// 			};
				// 			break;
				//
				// 	}
				// } else if (query && query.length > 1) {
				// 	result = {
				// 		"videos": gatherVideo(query),
				// 		"redirect": true,
				// 		"redirectUrl": "http://localhost:8080/filter/rubrics-deephouse_video-lessons"
				// 	};
				// } else {
				// 	result = {
				// 		"videos": categoriesVideos,
				// 		"redirect": true,
				// 		"redirectUrl": "http://localhost:8080/"
				// 	};
				// }
				// res.json(categoriesVideos);
			});
		}
	},
};