<template>
	<div>
		<div class="container" v-if="product !== undefined">
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
		<div v-else class="text-center" style="padding: 50px 0;">
			<h3 >No such product!</h3>
		</div>
		<div class="text-center">
			<router-link class="btn btn-info " :to="{name: 'catalog'}" tag="button">В каталог</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				product: this.$store.getters.getById(Number(this.$route.params.id), 'products'),
			}
		},
		computed: {
			imgUrl() {
				return '/assets/cars/' + this.product.img;
			}
		},
		watch: {
			$route(toR, fromR) {
				this.product = this.$store.getters.getById(Number(toR.params.id), 'products');
			}
		}
	}
</script>

<style scoped>
	img {
		width: 100%;
	}
</style>