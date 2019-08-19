<template>
	<div class="preloader" :class="{'preloader--show': !removePreloader}">
		<div class='sk-wave'>
			<div class='sk-rect sk-rect-1'></div>
			<div class='sk-rect sk-rect-2'></div>
			<div class='sk-rect sk-rect-3'></div>
			<div class='sk-rect sk-rect-4'></div>
			<div class='sk-rect sk-rect-5'></div>
		</div>
	</div>

</template>

<script>
	export default {
		props: ['removePreloader'],
		computed: {
			removePreloader() {
				return this.$store.state.removePreload;
			}
		}
	}
</script>

<style scoped lang="scss">
	$spinkit-size: 4em !default;
	$spinkit-spinner-color: cadetblue !default;

	.preloader {
		background: rgba(#fff, 0.5);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		flex: 1 1 25%;
		z-index: -1;

		&--show {
			z-index: 2;

			.sk-rect {
				animation: sk-wave-stretch-delay  1.2s infinite ease-in-out;
			}

		}
	}


	.sk-wave {
		$rectCount: 5;
		$animationDuration: 1.2s;
		$delayRange: 0.4s;
		display: flex;
		justify-content: space-between;

		width: $spinkit-size * 1.5;
		height: $spinkit-size;
		margin: auto;
		text-align: center;
		font-size: 1em;

		.sk-rect {
			background-color: $spinkit-spinner-color;
			height: 100%;
			width: .5em;
			display: inline-block;
		}

		@for $i from 1 through $rectCount {
			.sk-rect-#{$i} { animation-delay: - $animationDuration + $delayRange / ($rectCount - 1) * ($i - 1); }
		}
	}

	@keyframes sk-wave-stretch-delay {
		0%, 40%, 100% {
			transform: scaleY(0.4);
		}
		20% {
			transform: scaleY(1.0);
		}
	}
</style>