<template>
	<div>
		<div class="head">
			<span :class="['head__item', {active: currentTab === tab }]" v-for="tab in tabs" @click="currentTab = tab" :key="tab.id">
				{{tab}}
			</span>
		</div>
		<div class="body">
				<transition name="component-fade" mode="out-in">
					<keep-alive>

					<component :is="getCurrentTab"></component>
					</keep-alive>

				</transition>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				currentTab: 'Posts',
				tabs: [
					'Posts',
					'Archive'
				]
			}
		},
		computed: {
			getCurrentTab: function() {
				return 'tab-' + this.currentTab.toLowerCase();
			}
		},
		components: {
			tabPosts: () => import(/* webpackChunkName: "tab-posts" */'./tabs/tab-posts'),
			tabArchive: () => import(/* webpackChunkName: "tab-archive" */'./tabs/tab-archive'),
		}

	}
</script>

<style scoped lang="scss">
	.head {
		&__item {
			display: inline-block;
			border: 1px solid  #eee;
			border-top-left-radius: 5px;
			border-top-right-radius: 5px;
			padding: 5px 15px;
			cursor: pointer;
			background: #eeeeee;


			&.active {
				background: #e0e0e0;

			}
		}
	}

	.body {
		padding: 20px;
		width: 60%;
		border: 1px solid #eee;
		height: 200px;
		position: relative;
		top: -1px;
	}
	.component-fade-enter-active, .component-fade-leave-active {
		 transition: opacity .3s ease;
	 }
	.component-fade-enter, .component-fade-leave-to
		/* .component-fade-leave-active до версии 2.1.8 */ {
		opacity: 0;
	}

</style>