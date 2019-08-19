<template>
	<div class="like-counter">
		<span class="like-text">Likes: {{countLikes}}</span>
		<button class="btn like like--btn" :class="{'active': isLiked}" @click="$store.commit('addLike', id)"></button>
	</div>

</template>

<script>
	export default {
		props: ['id'],
		computed: {
			countLikes() {
				return this.$store.getters.getById(this.id, 'posts').likeCount;
			},
			isLiked() {
				return this.$store.getters.getById(this.id, 'posts').liked;
			}
		}
	}
</script>

<style scoped lang="scss">
	.like-counter {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

</style>