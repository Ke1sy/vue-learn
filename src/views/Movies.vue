<template>
	<div class="container">
		<h2>Welcome to Movies Gallery!</h2>
		<movies-filter></movies-filter>

		<div class="content">
			<preloader :removePreloader="moviesLoaded"></preloader>

			<div class="content__grid">
				<div v-for="video in movies" class="content__item item">
					<div class="content__img">
						<a :href="video.href">
							<img :src="video.src">
						</a>
					</div>
					<div class="content__desc">
						<a :href="video.href" class="content__link content__title"> {{video.title}}</a>
						<a :href="video.href" class="content__link content__btn">Посмотреть</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import preloader from "../components/Preloader";
	import MoviesFilter from "../components/movies/MoviesFilter";
	import { mapGetters, mapState } from 'vuex';

	export default {
		data() {
			return {
			}
		},
		computed: {
			...mapState([
				'moviesLoaded'
			]),

			...mapGetters({
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

	.content {
		width: 100%;
		position: relative;


		&__grid {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
		}

		&__item {
			width: 22%;
			background: rgba(0, 0, 0, 0.9);
			color: #fff;
			margin-bottom: 30px;
			overflow: hidden;
			margin-right: 3%;

			&:nth-of-type(4n) {
				margin-right: 0;
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

	img {
		max-width: 100%;
		transition: 0.2s linear;
	}

</style>