<template>
	<form class="form subscribe__form js-subscribe-form" action="/">
		<div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
			<label class="form__label">Имя* :</label>
			<input class="form__input" v-model.trim="$v.name.$model"/>
			<div v-show="$v.name.$dirty">
				<div class="error" v-if="!$v.name.required">Это поле необходимо заполнить!</div>
				<div class="error" v-if="!$v.name.alphaName">Укажите корректное имя</div>
				<div class="error" v-if="!$v.name.minLength">Имя должно содержать минимум
					{{$v.name.$params.minLength.min}} символа!
				</div>
			</div>
		</div>

		<div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
			<label class="form__label">Email* :</label>
			<input class="form__input" v-model.trim="$v.email.$model"/>
			<div v-show="$v.email.$dirty">
				<div class="error" v-if="!$v.email.required">Это поле необходимо заполнить!</div>
				<div class="error" v-if="!$v.email.email">Укажите корректный email адрес!</div>
			</div>
		</div>
		<div class="form-group" :class="{ 'form-group--error': $v.phone.$error }">
			<label class="form__label">Телефон* :</label>
			<masked-input v-model="$v.phone.$model" mask="\+\38 (011) 111-11-11" placeholder="" type="tel" class="form__input"/>
			<div v-show="$v.phone.$dirty">
				<div class="error" v-if="!$v.phone.required">Это поле необходимо заполнить!</div>
				<div class="error" v-if="!$v.phone.full">Укажите полный номер телефона!</div>
			</div>
		</div>

		<!--todo: photo-->
		<!--<div class="form-group">-->
		<!--<label class="form__label">Фото:</label>-->
		<!--<input type="file" name="photo"/>-->
		<!--</div>-->

		<div class="form-group text-center form__submit">
			<button type="submit" class="btn btn-lg btn-info form__btn" @click="submitForm">Подписаться</button>
		</div>
	</form>
</template>

<script>
	import Vue from 'vue';
	import Vuelidate from 'vuelidate';

	Vue.use(Vuelidate);
	import {alpha, required, minLength, email, helpers} from 'vuelidate/lib/validators';

	import MaskedInput from "vue-masked-input";

	Vue.use(MaskedInput);

	const testArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

	const alphaName = helpers.regex('alpha', /^[a-zA-Z\s-]*$/);

	const numberLength = (param) =>
		(value) => value.split('').filter(number => testArr.includes(number)).length === param;

	export default {
		data () {
			return {
				name: '',
				email: '',
				phone: '',
				img: '',
			}
		},
		validations: {
			name: {
				required,
				alphaName,
				minLength: minLength(3)
			},
			email: {
				required,
				email
			},
			phone: {
				required,
				full: numberLength(12)
			}
		},
		methods: {
			getImg (id) {
				return this.$store.getters.getById(id, 'team').img ? 'assets/team/team-' + this.$store.getters.getById(id, 'team').img : 'https://via.placeholder.com/78.png';
			},

			submitForm (e) {
				this.$v.$touch();
				if (this.$v.$invalid || this.$v.$error) {
					alert('Submit form!');
				}
				else {
					alert('Submit success!');

					this.$store.dispatch('addToTeam', {
						name: this.name,
						email: this.email,
						phone: this.fomattedNumber,
						img: this.img
					});
					setTimeout(() => {
						[this.name, this.email, this.img, this.phone] = ['', '', '', ''];
						this.$v.$reset();
					}, 200);
				}
				e.preventDefault();
			},

			decoratedPhone (number) {
				return number.slice(0, 3) + ' (' + number.slice(3, 6) + ') ' + number.slice(6, 9) + ' ' + number.slice(9, 11) + ' ' + number.slice(11);
			}
		},
		computed: {
			fomattedNumber () {
				return this.phone.replace(/[-()\s]/g, '');
			},
		},
		components: {
			MaskedInput
		},

		mounted: function () {
			this.$v.$reset();
		}
	}
</script>

<style scoped lang="scss">
	$color-red: #fe6252;

	.error {
		color: white;
		font-size: 12px;
		display: inline-block;
		background-color: $color-red;
		padding: 0 5px;
		position: absolute;
	}

	.form-group {
		margin-bottom: 1.5rem;

		&--error {
			animation-name: shakeError;
			animation-duration: .6s;
			animation-timing-function: ease-in-out;

			input {
				border: 1px solid $color-red;
			}

			.error {
				display: none;

				&:first-of-type {
					display: block;
				}
			}
		}
	}

	.form {
		max-width: 450px;
		margin: 0 auto;
		width: 100%;

		&__submit {
			margin-top: 2rem;
		}

		&__btn {
			margin: 0 auto;
			text-transform: uppercase;
			font-size: 16px;
			font-weight: 700;
			width: 50%;
		}
		&__label {
			display: block;
		}

		&__input {
			border: 1px solid cadetblue;
			border-radius: 3px;
			padding: 5px 15px;
			width: 100%;
		}
	}

	@keyframes shakeError {
		0% {
			transform: translateX(0);
		}
		15% {
			transform: translateX(0.375rem);
		}
		30% {
			transform: translateX(-0.375rem);
		}
		45% {
			transform: translateX(0.375rem);
		}
		60% {
			transform: translateX(-0.375rem);
		}
		75% {
			transform: translateX(0.375rem);
		}
		90% {
			transform: translateX(-0.375rem);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>