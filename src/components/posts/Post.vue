<template>
	<div class="col col-12 col-sm-6 mb-4" :id="post.id">
		<div class="posts__item">
			<button class="remove-btn" @click="removePost(post.id)" v-show="showRemove">X</button>
			<div class="posts__info">
				<h5 class="posts__name">{{post.title}} {{post.id}} </h5>
				<p class="posts__text">{{post.body}}</p>
			</div>
			<div class="posts__foot">
				<like-counter :id="post.id"></like-counter>
			</div>
		</div>
	</div>
</template>

<script>
	import LikeCounter from './LikeCounter';
	export default {
		components: {LikeCounter},
		props: ['post', 'showRemove'],
		data() {
			return {
			}
		},
		methods: {
			removePost(id) {
				this.$emit('removePost', {'id': id});
			},
		},
		computed: {

		}
	}
</script>

<style scoped>

</style>