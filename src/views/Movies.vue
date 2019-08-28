<template>
	<div class="container">
		<h2>Welcome to Movies Gallery!</h2>

		<div class="content">
			<div class="content__grid">
				<div class="content__left">
					<movies-filter></movies-filter>
					<preloader :removePreloader="moviesLoaded"></preloader>
					<div class="content__movies">
						<div v-for="video in movies" class="movie">
							<div class="movie__img">
								<a :href="video.href">
									<img :src="video.src">
								</a>
							</div>

							<div class="movie__desc">
								<a :href="video.href" class="movie__link movie__title"> {{video.title}}</a>
								<div class="movie__bottom">
									<span class="movie__rating">Rating: {{video.rating}}</span>
									<button class="movie__btn btn" :class="{active: activeFilms.indexOf(video.id) > -1}" @click="$store.commit('willWatch', video)">Will Watch</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="content__right watch">
					<template v-if="moviesToWatch.length > 0">
						<div class="watch__title">Will Watch: {{moviesToWatch.length}} movies</div>
						<div class="watch__body">
							<div class="watch__item" v-for="item in moviesToWatch">
								<div class="watch__name">{{item.title}}</div>
								<div class="watch__rating">{{item.rating}}</div>
							</div>
						</div>
					</template>
					<template v-else="!moviesToWatch.length">
						<div class="watch__title">Watch List is Empty</div>
					</template>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import preloader from "../components/Preloader";
	import MoviesFilter from "../components/movies/MoviesFilter";
	import {mapGetters, mapState} from 'vuex';

	export default {
		data () {
			return {

			}
		},
		computed: {
			activeFilms() {
				let arr = [];
				this.moviesToWatch.forEach((item) => arr.push(item.id));
				return arr;
			},
			...mapState([
				'moviesLoaded',
				'moviesToWatch'
			]),

			...mapGetters({
				movieIsActive: 'movieIsActive',
				movies: 'filteredMovies'
			}),
		},
		methods: {
		},
		components: {
			preloader,
			MoviesFilter
		},
	}
</script>

<style scoped lang="scss">
	h2 {
		text-align: center;
		font-size: 24px;
		font-weight: 700;
		margin: 40px 0;
	}
	.watch {
		&__title {
			font-weight: 700;
			font-size: 18px;
			text-align: center;
			padding: 10px 0;
		}

		&__body {
			margin-top: 30px;
			border-radius: 5px;
			border: 2px solid #eeeeee;
		}

		&__item {
			font-weight: 700;
			padding: 15px 20px;
			display: flex;
			align-items: center;
			border-bottom: 2px solid #eeeeee;

			&:last-of-type {
				border-bottom: none;
			}
		}

		&__name {
			width: 80%;
		}

		&__rating {
			text-align: right;
			width: 20%;
		}
	}

	.movie {
		width: 30%;
		background: rgba(0, 0, 0, 0.9);
		color: #fff;
		margin-bottom: 30px;
		overflow: hidden;
		margin-right: 3%;

		&:nth-of-type(3n) {
			margin-right: 0;
		}

		&__bottom {
			display: flex;
			width: 100%;
			align-items: center;
		}

		&__rating {
			width: 50%;
		}

		&__btn {
			color: #ffffff;
			width: 50%;
			border-color: white;
			padding: 5px;
			font-weight: 700;
			font-size: 14px;

			&.active {
				background: #fff;
				border-color: #fff;
				color: #212529;
			}
		}

		&__img {
			max-height: 100%;
			overflow: hidden;

			&:hover img {
				transform: scale(1.15);
				transition: 0.2s linear;
			}
		}

		&__desc {
			font-weight: 500;
			padding: 10px 20px;
			display: flex;
			flex-direction: column;
			align-items: flex-start;

		}

		&__link {
			color: #fff;
			font-size: 14px;

			&:hover {
				text-decoration-color: rgba(255, 255, 255, 0.5);
			}
		}

		&__title {
			font-size: 20px;
			margin-bottom: 5px;
			line-height: 1.2;
		}
	}

	.content {
		width: 100%;
		position: relative;

		&__grid {
			display: flex;
			padding-top: 40px;
		}

		&__right {
			width: 25%;
		}

		&__left {
			width: 75%;
		}

		&__movies {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
		}

	}

	img {
		max-width: 100%;
		transition: 0.2s linear;
	}

</style>