<template>
	<div class="container">
		<h1 class="text-center mb-4">Our Posts</h1>
		<search @initSearch="initSearch" :count="filteredPostsCount"></search>
		<div class="row posts">
			<preloader :removePreloader="removePreloader"></preloader>
			<post v-for="post in getItems" :key="post.id" :post="post" v-on:removePost="removePost" :show-remove="true"></post>
			<button class="btn btn-info m-auto" @click="showAmount+=showStep" v-show="showAmount <= filteredPosts.length"> Show more</button>
		</div>
	</div>
</template>


<script>
	import search from "../components/Search";
	import post from "../components/posts/Post";
	import preloader from "../components/Preloader";

	export default {
		data () {
			return {
				posts: this.$store.state.posts,
				filteredPosts: this.$store.state.posts,
				filteredPostsCount: 0,
				showStep: 4,
				showAmount: 4
			}
		},
		methods: {
			removePost (id) {
				this.$store.commit('removePost', id);
			},

			initSearch (val) {
				if (val.length >= 1) {
					this.filteredPosts = [];
					this.filteredPosts = this.$store.getters.findBySearch(val);
					this.filteredPostsCount = this.filteredPosts.length;
				} else {
					this.filteredPosts = this.posts;
				}
			},

		},
		computed: {
			removePreloader() {
				return this.$store.state.removePreload;
			},
			getItems() {
				return this.filteredPosts.slice(0, this.showAmount);
			},
		},
		components: {
			post,
			preloader,
			search
		},
		watch: {
			posts: function (val) {
				this.filteredPosts = val;
			}
		}
	}
</script>

<style scoped>
.disable {
	opacity: 0.5;
	pointer-events: none;
}
</style>