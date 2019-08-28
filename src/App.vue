<template>
	<div class="home">
		<headerPart></headerPart>
		<main>
			<router-view></router-view>
		</main>
		<app-cart></app-cart>
		<footer></footer>
	</div>
</template>

<script>
	import Cart from './components/catalog/Cart';
	import headerPart from "./components/Header";

	export default {
		data () {
			return {
				apiUrls: this.$store.state.apiUrls,
			}
		},
		methods: {},
		computed: {
			categoriesLoaded() {
				return this.$store.state.categoriesLoaded;
			}
		},
		components: {
			headerPart,
			'app-cart': Cart
		},

		created: function () {
			this.$store.dispatch('getApiUrls', this.$root.url);
		},

		watch: {
			categoriesLoaded: function (val) {
				if(val && !this.$store.state.categoriesChecked) {
					let isSelectedCat = this.$route.query.cat;
					if(isSelectedCat !== 'undefined') {
						this.$store.commit('checkCategories', {selected: isSelectedCat});
					}
				}
			},

			$route (toR, fromR) {
				switch (toR.name) {
					case 'movies':

						if (!this.$store.state.categoriesLoaded) {
							this.$nextTick(() => {
								setTimeout(() => {
									this.$store.dispatch('getArray', {
										'el': 'categoriesLoaded',
										'callback': 'changeArr',
										'array': 'categories'
									});
								}, 2000);
							});
						}

						if (!this.$store.state.moviesLoaded) {
							this.$nextTick(() => {
								setTimeout(() => {
									this.$store.dispatch('getArray', {
										'el': 'moviesLoaded',
										'callback': 'changeArr',
										'array': 'movies'
									});

								}, 3000);
							});
						}
						break;

					case 'posts':
						if (!this.$store.state.postsLoaded) {
							this.$nextTick(() => {
								setTimeout(() => {
									this.$store.dispatch('getArray', {
										'el': 'postsLoaded',
										'callback': 'changePosts',
										'array': 'posts'
									});
								}, 3000);
							});
						}
						break;

					case 'subscribe':
						if (!this.$store.state.teamLoaded) {
							this.$nextTick(() => {
								setTimeout(() => {
									// this.$store.dispatch('getPosts');
									this.$store.dispatch('getArray', {
										'el': 'teamLoaded',
										'callback': 'changeArr',
										'array': 'team'
									});
								}, 1000);
							});
						}
						break;

					case 'catalog':
					case 'product':
						if (!this.$store.state.productsLoaded) {

							this.$nextTick(() => {
								setTimeout(() => {
									this.$store.dispatch('getArray', {
										'el': 'productsLoaded',
										'callback': 'changeArr',
										'array': 'products'
									});
								}, 100);
							});
						}
						break;
				}
			},
		}

	}
</script>

<style lang="scss">
	@import "assets/scss/styles";
</style>
