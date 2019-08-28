import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios);


export default new Vuex.Store({
	state: {
		apiUrls: false,
		inCart: [],
		products: [],
		productsLoaded: false,
		posts: [],
		postsLoaded: false,
		teamLoaded: false,
		team: [],
		movies: [],
		categories: [],
		moviesLoaded: false,
		categoriesLoaded: false,
	},
	getters: {
		//common getters
		getById: state => (id, arr) => {
			return state[arr].find(item => item.id === id);
		},

		getByName: state => (name, arr) => {
			return state[arr].find(item => item.name === name);
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
		},

		//movies getters

		checkedCategories: state => {
			return state.categories.filter(item => item.checked);
		},

		checkedCategoriesIds: (state, getters) => {
			let checkedIds = [];
			getters.checkedCategories.forEach(item => checkedIds.push(item.id));
			return checkedIds;
		},

		filteredMovies: (state, getters)  => {
			if( !getters.checkedCategoriesIds.length ) {
				return state.movies;
			} else {
				return state.movies.filter(movie => getters.checkedCategoriesIds.indexOf(Number(movie.category)) > -1);
			}
		}
	},
	mutations: {
		//posts mutations

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

		//posts from placeholder api
		changePosts (type, payload) {
			let data = payload.data;
			for (let i = 0; i < 10; i++) {
				data[i].liked = false;
				data[i].likeCount = 0;
				this.state.posts.push(data[i]);
			}
		},

		changeArr(state, payload) {
			let elems = payload.data.data;
			let arr = payload.array;
			for (let i = 0; i < elems.length; i++) {
				this.state[arr].push(elems[i]);
			}
		}
	},
	actions: {
		//get data from json file
		getArray(state, payload) {
			let $this = this;
			let $loadEl = payload.el;
			let $array = payload.array;
			let $loadCallback = payload.callback;
			let $loadUrl = this.getters.getByName($array, 'apiUrls').url;
			Vue.axios.get($loadUrl).then((response) => {
				$this.commit({
					'type': $loadCallback,
					'data': response.data,
					'array': $array
				});
				$this.state[$loadEl] = true;
			})
			.catch(error => {
				console.warn(error);
				$this.state[$loadEl] = true;
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

		},

		getApiUrls(state, payload) {
			let $this = this;
			Vue.axios.get(payload).then((response) => {
				$this.state.apiUrls = response.data.urls;
			}, (err) => {
				console.warn(err);
			});
		},

		updateFilter(state) {
			// let $this = this;
			// let categoriesIds = [];
			// $this.getters.checkedCategories.forEach(item => categoriesIds.push(item.id));
			// history.pushState(null, null, response.data.redirectUrl);

			// Vue.axios.post('/server', {
			// 	categories: categoriesIds,
			// }).then((response) => {
			// 	this.responseVideos = response.data.data;
			// 	history.pushState(null, null, response.data.redirectUrl);
			// });
			// alert(123);
		}
	},
});
