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
			return {}
		},
		methods: {},
		computed: {},
		components: {
			headerPart,
			'app-cart': Cart
		},

		mounted: function () {
			this.$nextTick(() => {
				setTimeout(() => {
					this.$store.dispatch('getPosts');
				}, 3000);
			});

		}

	}
</script>

<style lang="scss">
	@import "assets/scss/styles";

	.active {

	}
</style>
