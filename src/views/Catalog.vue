<template>
  <div class="catalog">
    <div class="container">
      <h1 class="text-center mb-4">Catalog</h1>

      <app-products :count-to-show="countToShow" :page="page"></app-products>
      <pagination :count-all="countAll" :count-to-show="countToShow" :page="page" @changePage="changePage" v-show="showPagination"></pagination>
    </div>
  </div>
</template>


<script>
	import Actions from '../components/catalog/Actions';
	import Products from '../components/catalog/Products';
	import Pagination from '../components/Pagination';
	export default {
		data() {
			return {
				countToShow: 6,
                page: 1
			}
		},
        computed: {
			showPagination() {
				return this.countAll > this.countToShow;
            },
	        countAll() {
	        	return this.$store.state.products.length;
            }
        },

        methods: {
	        changePage(val) {
	        	this.page += val;
	        },
        },

		components: {
			'app-actions': Actions,
			'app-products': Products,
			Pagination
		}
	}
</script>

<style scoped>
  h3 {
    text-align: center;
  }
  .container {
    text-align: center;
  }
</style>
