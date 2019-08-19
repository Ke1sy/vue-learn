<template>
    <div>
        <div class="products row justify-content-between">
            <app-product class="item" v-for="product in productsPage"  :product="product" :key="product.id"></app-product>
        </div>
    </div>
</template>

<script>
	import Item from './Item';
	export default {
		props:['countToShow', 'page'],

		data() {
			return {
				products: this.$store.state.products
			}
		},
        computed: {
	        productsPage() {
	        	return this.products.slice((this.page - 1) * this.countToShow, this.page * this.countToShow);
            }
        },
		methods: {

		},
		components: {
			'app-product': Item
		}
	}
</script>

<style scoped>
    .products {
        margin: 30px 0;
        display: flex;
        justify-content: space-between;
    }

    .item {
        min-height: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px;
    }

</style>
