<template>
    <div>
        <div class="products row justify-content-between">
            <preloader :removePreloader="productsLoaded"></preloader>
            <app-product class="item" v-for="product in productsPage"  :product="product" :key="product.id"></app-product>
        </div>
    </div>
</template>

<script>
	import Item from './Item';
	import preloader from "../Preloader";
	import { mapState } from 'vuex';

	export default {
		props:['countToShow', 'page'],

        computed: {
	        productsPage() {
	        	return this.products.slice((this.page - 1) * this.countToShow, this.page * this.countToShow);
            },
	        ...mapState([
		        'products',
		        'productsLoaded'
	        ]),
        },
		components: {
			'app-product': Item,
			'preloader': preloader,
		}
	}
</script>

<style scoped>
    .products {
        position: relative;
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
