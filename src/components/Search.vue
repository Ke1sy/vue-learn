<template>
	<div class="search">
		<div class="search__form">
			<input type="text" value="" placeholder="Поиск по заголовку..." class="search__input" v-model="searchVal" @keyup="initSearch()">
			<button class="remove-btn" @click="resetSearch()">x</button>
		</div>
		<div class="search__text">
			<span v-show="searchVal.length > 0">
				Найдено по запросу "{{searchVal}}":
				<br>
				<span v-show="count <= 0" class="no-results">{{count.length}}Результатов по данному запросу не найдено</span>
			</span>
		</div>
	</div>

</template>

<script>
	export default {
		props:['count'],
		data() {
			return {
				searchVal: '',
			}
		},
		methods: {
			initSearch() {
				this.$emit('initSearch', this.searchVal);
			},

			resetSearch(){
				this.searchVal = '';
				this.initSearch();
			}
		},
		computed: {

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