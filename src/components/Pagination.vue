<template>
	<div class="pagination">
		<span class="pagination-link" :class="{'disabled': !canDecreasePage}" @click="changePage(-1)"> < </span>
		<span class="pagination-link pagination-link--current"> {{page}} </span>
		<span class="pagination-link" :class="{'disabled': !canIncreasePage}" @click="changePage(1)"> > </span>
	</div>

</template>

<script>

	export default {
		props:['countAll', 'countToShow', 'page'],
		data() {
			return{

			}
		},
		methods: {
			changePage(val) {
				if(this.canDecreasePage && val < 0 ) {
					this.$emit('changePage', val);
				} else if(this.canIncreasePage && val > 0 ) {
					this.$emit('changePage', val);
				} else {
					console.log( Math.ceil(this.countAll / this.countToShow));
				}
			},
		},

		computed: {
			canDecreasePage() {
				return this.page > 1;
			},

			canIncreasePage() {
				return this.page < Math.ceil(this.countAll / this.countToShow);
			},

			removePreloader() {
				return this.$store.state.removePreload;
			}
		},
	}
</script>

<style scoped lang="scss">

</style>