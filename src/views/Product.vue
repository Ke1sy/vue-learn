<template>
	<div class="container">
		<h1 class="text-center title"> {{product.title}}</h1>
		<div class="row">
			<div class="col col-12 col-sm-5 mb-4">
				<img :src="imgUrl"/>
			</div>

			<div class="col col-12 col-sm-7 mb-4">
				<p>Description .. . info Description .. . infoDescription .. . infoDescription .. . infoDescription .. . infoDescription .. . infoDescription .. . infoDescription .. . infoDescription .. . infoDescription .. . info</p>
				<ul>
					<li v-for="i in 5">{{i}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Product",
		data() {
			return {
				product: this.$store.getters.getById(this.$route.params.id, 'products'),
			}
		},
		computed: {
			imgUrl() {
				return '/assets/cars/' + this.product.img;
			}
		}
	}
</script>

<style scoped>
img {
	width: 100%;
}
</style>