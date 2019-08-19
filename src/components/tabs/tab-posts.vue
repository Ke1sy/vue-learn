<template>
	<div class="content">
		<div class="left">
			<h5 v-for="post in posts" :key="post.id" :class="{active: post === selectedPost}" @click="selectedPost = post">
				{{post.title}}
			</h5>
		</div>
		<div class="right">
			<div v-if="selectedPost === null">
				<p>Choose the tab</p>
			</div>
			<div v-else>
				<h6> {{selectedPost.title}} </h6>
				<p> {{selectedPost.content}} </p>
			</div>
		</div>
	</div>


</template>

<script>
	export default {
		data() {
			return {
				posts: [
					{
						id: 1,
						title: 'Cat Ipsum',
						content: 'Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around'
					},
					{
						id: 2,
						title: 'Hipster Ipsum',
						content: 'Bushwick blue bottle scenester helvetica ugh, meh four loko. Put a bird on it lumbersexual franzen shabby chic, street art knausgaard trust fund shaman scenester live-edge mixtape taxidermy viral yuccie succulents. Keytar poke bicycle rights, crucifix street art neutra air plant PBR&B hoodie plaid venmo. Tilde swag art party fanny pack vinyl letterpress venmo jean shorts offal mumblecore. Vice blog gentrify mlkshk tattooed occupy snackwave, hoodie craft beer next level migas 8-bit chartreuse. Trust fund food truck drinking vinegar gochujang.'
					},
					{
						id: 3,
						title: 'Cupcake Ipsum',
						content: 'Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan.'
					}
				],
				selectedPost: null
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		font-size: 14px;
		width: 100%;
		display: flex;
		height: 100%;
	}
	.left {
		width: 30%;
		border-right: 1px solid #eee;
		padding-right: 20px;
	}

	.right {
		width: 70%;
		overflow: auto;
		height: 100%;
		padding-left: 20px;
	}

	h5 {
		cursor: pointer;
		margin-bottom: 10px;
		font-size: 1.3em;
		padding-left: 10px;


		&.active {
			font-weight: 700;
			background: lightblue;
		}
	}

	h6 {
		font-weight: 600;
	}
</style>