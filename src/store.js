import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const postsApi = "https://jsonplaceholder.typicode.com/posts";
const moviesApi = "json/all-movies.json";

export default new Vuex.Store({
	state: {
		posts: [],
		postsLoaded: false,

		inCart: [],
		products: [
			{"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2, "img": '1.jpg'},
			{"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10, "img": '2.jpg'},
			{"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5, "img": '3.jpg'},
			{"id": 4, "title": "iPad 3", "price": 500.01, "inventory": 7, "img": '4.jpg'},
			{"id": 5, "title": "H&M T-Shirt Red", "price": 10.99, "inventory": 6, "img": '5.jpg'},
			{"id": 6, "title": "Asus g546", "price": 19.99, "inventory": 12, "img": '6.jpg'},
			{"id": 7, "title": "iPhone 10", "price": 500.01, "inventory": 17, "img": '7.jpg'},
			{"id": 8, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 3, "img": '2.jpg'},
			{"id": 9, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 1, "img": '3.jpg'}
		],

		team: [
			{"id": 1, "name": "Сидоренко Андрей", "email": "sidorenko@gmail.com", "phone": '+380987000999', "img": '1.png'},
			{"id": 2, "name": "Иваненко Владислав", "email": "ivanenko@gmail.com", "phone": '+380671266999', "img": '2.png'},
			{"id": 3, "name": "Жук Вита", "email": "zhuk.svk@gmail.com", "phone": '+380677722888', "img": '3.png'},
			{"id": 4, "name": "Смирнова Наталья", "email": "smirnova.svk@gmail.com", "phone": '+380661168999', "img": '4.png'},
		],

		movies: [],

		moviesLoaded: false,
	},
	getters: {
		//common getters
		getById: state => (id, arr) => {
			return state[arr].find(item => item.id === id);
		},

		//posts getters
		findFavourites: state => {
			return state.posts.filter(post => post.liked);
		},

		findBySearch: state => searchText => {
			return state.posts.filter(post => post.title.indexOf(searchText) >= 0);
		},

		//catalog getters
		getImg: state => id => {
			return state.products.find(product => product.id === id).img;
		},

		inCartLength: state => {
			return state.inCart.length;
		},

		getFromCart: state => id => {
			return state.inCart.find(cartItem => cartItem.id === id);
		},

		getTotalSum: state => {
			let sum = 0;
			state.inCart.forEach((item) => {
				let price = state.products.find(x => x.id === item.id).price;
				sum += price * item.count;
			});

			return sum.toFixed(2);
		}
	},
	mutations: {
		//posts mutations
		changePosts (type, payload) {
			let data = payload.data;
			for (let i = 0; i < 10; i++) {
				data[i].liked = false;
				data[i].likeCount = 0;
				this.state.posts.push(data[i]);
			}
		},

		removePost (type, payload) {
			let odd = this.getters.getById(payload.id, 'posts');
			this.state.posts.splice(odd, 1);
		},

		addLike (type, payload) {
			let likedItem = this.getters.getById(payload, 'posts');
			if (likedItem.liked) {
				likedItem.likeCount--;
			} else {
				likedItem.likeCount++;
			}
			likedItem.liked = !likedItem.liked;
		},

		// catalog mutations
		addToCart(state, payload) {
			state.inCart.push(payload);
		},

		updateCart(state, payload) {
			let item = state.inCart.find(x => x.id === payload.id);
			item.count += payload.count;
		},

		changeInCart(state, payload) {
			let item = state.inCart.find(x => x.id === payload.id);
			item.count += payload.val;
		},

		deleteFromCart(state, payload) {
			state.inCart.forEach((el, i) => {
				if (el.id === payload) {
					state.inCart.splice(i, 1);
					return false;
				}
			});
		},

		//movies

		changeMovies(state, payload) {
			let movies = payload.data.movies;
			for (let i = 0; i < movies.length; i++) {
				this.state.movies.push(movies[i]);
			}
		}
	},
	actions: {
		//posts actions

		getPosts () {
			let $this = this;
			Vue.axios.get(postsApi).then((response) => {
				$this.commit({
					'type': 'changePosts',
					'data': response.data
				});
				$this.state.postsLoaded = true;

			}, (err) => {
				console.warn(err);
				$this.state.postsLoaded = true;
			});
		},

		getMovies() {
			let $this = this;
			Vue.axios.get(moviesApi).then((response) => {
				$this.commit({
					'type': 'changeMovies',
					'data': response.data
				});
				$this.state.moviesLoaded = true;
			})
			.catch(error => {
				console.warn(error);
				$this.state.moviesLoaded = true;
			});
		},

		//subscribe actions
		addToTeam (state, payload) {
			let $this = this;
			setTimeout(()=>{
				let lastId = Number($this.state.team[$this.state.team.length - 1].id) + 1;
				let newMember = Object.assign({id: lastId}, payload);
				$this.state.team.push(newMember);
			}, 2000);

		}
	},

});
