<template>
	<div class="subscriber">
		<div class="subscriber__img">
			<img :src=" getImg(user.id)" alt="" width="78" height="78">
		</div>
		<div class="subscriber__info">
			<span>{{user.name}}</span>
			<a :href="'mailto:' + user.email" class="subscriber__link">{{user.email}}</a>
			<a :href="'tel:' + fomattedNumber(user.phone)" class="subscriber__link">
				{{decoratedPhone(fomattedNumber(user.phone))}}
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['user'],
		data () {
			return {
				team: this.$store.state.team,
			}
		},
		methods: {
			getImg (id) {
				return this.$store.getters.getById(id, 'team').img ? 'assets/team/team-' + this.$store.getters.getById(id, 'team').img : 'https://via.placeholder.com/78.png';
			},

			decoratedPhone (number) {
				return number.slice(0, 3) + ' (' + number.slice(3, 6) + ') ' + number.slice(6, 9) + ' ' + number.slice(9, 11) + ' ' + number.slice(11);
			},

			fomattedNumber (phone) {
				return phone.replace(/[-()\s]/g, '');
			},
		},
		computed: {

		},

	}
</script>


<style scoped lang="scss">
	.subscriber {
		background: #edf4f8;
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 20px;
		border: 1px solid #eeeeee;


		&__img {
			margin-bottom: 20px;

			img {
				border-radius: 50%;
			}
		}

		&__info {
			position: relative;
			display: flex;
			flex-direction: column;

			&::before {
				content: "";
				display: block;
				height: 1px;
				width: 48px;
				position: absolute;
				top: -10px;
				left: calc(50% - 24px);
				background: #00629b;
			}
		}

		&__link {
			color: #2c3e5d;
			margin-top: 5px;

			&:hover {
				color: cadetblue;
			}
		}
	}

</style>