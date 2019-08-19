<template>
  <div class="favourites">
    <div class="container">
      <h1 class="text-center">Favourites</h1>
      <div v-show="!likedPosts.length" class="text-center empty-list">
        <p>Список желаний пуст!</p>
        <img src="../assets/images/animal/cat--fear.png" />
        <p></p>
      </div>
      <div class="row posts">
        <post v-for="post in likedPosts" :key="post.id" :post="post" :show-remove="false"></post>
      </div>
    </div>
  </div>
</template>


<script>
	import post from "../components/posts/Post";

	export default {
		data () {
			return {
			}
		},
		methods: {

		},
		computed: {
			likedPosts() {
				return this.$store.getters.findFavourites;
			}
		},
		components: {
			post
		}
	}
</script>

<style lang="scss" scoped>
   .empty-list {
     font-size: 20px;
   }
</style>