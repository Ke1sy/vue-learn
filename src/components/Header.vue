<template>
	<header>
		<div class="container">
			<nav class="navbar navbar-expand-lg navbar-dark">
				<router-link to="/" class="navbar-brand" active-class="active" exact>Posts</router-link>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						<router-link class="nav-item" active-class="active" to="/" tag="li" exact>
							<a class="nav-link">Home</a>
						</router-link>
						<router-link class="nav-item" active-class="active" to="/posts" tag="li" exact>
							<a class="nav-link">Posts</a>
						</router-link>
						<router-link class="nav-item" active-class="active" to="/catalog" tag="li" exact>
							<a class="nav-link">Catalog</a>
						</router-link>
						<router-link class="nav-item" active-class="active" to="/favourites" tag="li" exact>
							<a class="nav-link">Favourites</a>
						</router-link>
						<router-link class="nav-item" active-class="active" to="/subscribe" tag="li" exact>
							<a class="nav-link">Subscribe</a>
						</router-link>
						<router-link class="nav-item" active-class="active" to="/movies" tag="li" exact>
							<a class="nav-link">Movies</a>
						</router-link>
					</ul>
				</div>
				<router-link class="nav-link" to="/favourites" active-class="active" exact>
						<span class="like" title="Liked posts">
							<span class="like-count">{{findFavourites.length}}</span>
						</span>
				</router-link>
				<span @click="openCart()" title="Cart">
					<span class="cart-icon">
						<span class="like-count">{{inCartLength}}</span>
					</span>
				</span>
			</nav>
		</div>
	</header>
</template>

<script>
	import { mapGetters } from 'vuex';
	import $ from 'jquery';
	export default {
		methods: {
			openCart(){
				$('#exampleModal').modal('show');
			}
		},
		computed: {
			...mapGetters([
				'inCartLength',
				'findFavourites'
			]),
		}
	}
</script>

<style scoped lang="scss">
	.search {
		padding: 20px 0;
		&__input {
			width: 100%;
			border-radius: 4px;
			box-shadow: inset 0 0 7px 0 rgba(0, 0, 0, 0.15);
			padding: 10px 20px;
			border: 1px solid #eee;
			margin-bottom: 10px;

		}

		&__text {
			line-height: 14px;
			font-size: 14px;
			color: grey;
			min-height: 14px;
		}

		&__form {
			position: relative;
		}
	}

	.no-results {
		display: block;
		margin-top: 5px;
		color: red;
	}
</style>