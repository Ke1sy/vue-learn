<template>
  <div class="col-12 col-md-4">
	  <div class="product">
		  <img :src="'assets/cars/' + getUrl(product.id)" />
		  <h6>
			  <router-link :to="{ name: 'product', params: { id: product.id, product: product }}">{{product.title}}</router-link>
		  </h6>
		  <p>Цена: {{product.price}} грн.</p>
		  <div class="actions">
			  <button @click="changeCount(-1)" class="btn btn-danger" :disabled="count===1">-</button>
			  <input type="text" :value="count" class="counter">
			  <button @click="changeCount(1)" class="btn btn-success" :disabled="count>=getAvailableQuantity">+</button>
		  </div>
		  <p>В наличии: {{$store.getters.getById(this.product.id, 'products').inventory}}</p>
		  <button class="btn btn-info btn-md" @click="addToCart()" :disabled="count>getAvailableQuantity">В корзину</button>
	  </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  export default {
    props: ['product'],
    data() {
      return {
        count: 1,
      }
    },
    methods: {
      changeCount(val) {
        if ((this.count > 1) || (this.count === 1 && val > 0)) {
          this.count += val;
        } else {
          return false;
        }
      },
      getUrl(id) {
        let img = this.$store.getters.getImg(id);
        return img;
      },
      addToCart() {
        if (this.$store.getters.getFromCart(this.product.id)) {
          this.$store.commit('updateCart', {
            id: this.product.id,
            count: this.count
          });
        } else {
          this.$store.commit('addToCart', {
            id: this.product.id,
            count: this.count
          });
          this.count = 1;
        }

        $('#exampleModal').modal('show');
      }
    },
    computed: {
      getAvailableQuantity() {
        if (!this.$store.getters.getFromCart(this.product.id)) {
          return this.$store.getters.getById(this.product.id, 'products').inventory;
        } else {
          return this.$store.getters.getById(this.product.id, 'products').inventory - this.$store.getters.getFromCart(this.product.id).count;
        }
      }
    },
    components: {}
  }
</script>

<style scoped>
	.product {
		border: 1px solid #eee;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 20px;
		height: 100%;
	}
  .counter {
    width: 50px;
    text-align: center;
    background: #eee;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .actions {
    margin: 10px 0 20px;
    display: flex;
  }

  img {
    max-width: 100%;
    max-height: 150px;
	  margin-bottom: 10px;
  }

  .btn {
	  width: 70%;
  }

  h3 {
    margin-top: 20px;
    text-align: center;
  }
</style>
