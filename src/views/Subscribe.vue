<template>
	<div class="container subscribe">
		<div class="subscribe__title">Наши подписчики</div>

		<div class="subscribe__grid">
			<subscriber v-for="user in team" :user="user"></subscriber>
		</div>

		<div class="subscribe__title">Подпишитесь прямо сейчас!</div>

		<subscribe-form></subscribe-form>
	</div>
</template>

<script>
	import subscribeForm from '../components/subscribe/SubscribeForm';
	import subscriber from '../components/subscribe/Subscriber';

	export default {
		data() {
			return {
				name: '',
				email: '',
				phone: '',
				img: '',
			}
		},
		methods: {

		},
		computed: {
			team(){
				return  this.$store.state.team
			},
		},
		components: {
			subscriber,
			subscribeForm
		},
	}
</script>

<style scoped lang="scss">


	.subscribe {

		&__title {
			text-align: center;
			margin: 40px 0;
			font-size: 28px;
			font-weight: 700;
		}

		&__grid {
			width: 80%;
			display: flex;
			flex-wrap: wrap;
			margin: 0 10%;
		}
	}
</style>