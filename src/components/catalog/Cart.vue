<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">

          <!--cart-->
            <div class="cart">
        <h3>Корзина</h3>
        <div class="cart-content" v-show="cartLength">
            <div class="row head-row">
                <div class="col col-3">Название:</div>
                <div class="col col-3">Количество:</div>
                <div class="col col-2">Цена:</div>
                <div class="col col-2">Сумма:</div>
                <div class="col col-2"></div>
            </div>
            <div class="cart-item" v-for="item in cartItems">

                <div class="row">
                    <div class="col col-3">{{getFromCart(item.id).title}}</div>
                    <div class="col col-3">
                      <button @click="changeCount(-1, item.id)" class="btn btn-danger" :disabled="item.count===1">-</button>
                      <span class="amount">{{item.count}}</span>
                      <button @click="changeCount(1, item.id)" class="btn btn-success" :disabled="item.count >= $store.getters.getById(item.id, 'products').inventory">+</button>
                    </div>
                    <div class="col col-2">{{getFromCart(item.id).price | fixed}}</div>
                    <div class="col col-2">{{item.count*getFromCart(item.id).price | fixed}}</div>
                    <div class="col col-2">
                      <button type="button" class="btn btn-danger btn-sm" @click="deleteFromCart(item.id)">
                        Удалить
                      </button>
                    </div>
                </div>

            </div>
          <div class="row head-row">
            <div class="col col-3"></div>
            <div class="col col-3"></div>
            <div class="col col-2"></div>
            <div class="col col-2">{{totalSum}}</div>
            <div class="col col-2"></div>
          </div>
            <br>
            <p>Товаров в корзине: {{cartLength}}</p>
            <!--<p>Товары: <b>{{cartItems}}</b></p>-->
        </div>
        <div class="cart-content" v-show="!cartLength">
            <p>В корзине нет товаров!</p>
        </div>
    </div>
        <!--end cart-->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">Закрыть</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				cartItems: this.$store.state.inCart
			}
		},
		computed: {
            cartLength() {
	            let items = this.$store.state.inCart;
	            let quantity = 0;
	            items.forEach(function (el, i) {
		            quantity += el.count;
	            });
	            return quantity;
            },

            totalSum () {
              return this.$store.getters.getTotalSum;
            }

		},
    methods: {
          changeCount(val, id) {
              this.$store.commit('changeInCart', {
                id: id,
                val: val
              })
          },
	        getFromCart(id) {
		        return this.$store.getters.getById(id,'products');
	        },

          deleteFromCart(id) {
             let deletedItem = this.$store.commit('deleteFromCart', id);
             console.log(deletedItem);
          }
        },
    filters: {
		  fixed(val){
		    return val.toFixed(2);
      }
    }
	}
</script>

<style scoped>
  .head-row {
    font-weight: 500;
    background: antiquewhite;
  }
  .modal-dialog {
    max-width: 600px;
      transform: none;
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
  }
    .cart {
        padding: 0 20px;
    }
    h3 {
        margin-top: 20px;
        text-align: center;
    }
    .col{
      display: flex;
      align-items: center;
      justify-content: center;
        border: 1px solid grey;
    }
  .amount {
    padding: 0 10px;
  }


</style>
