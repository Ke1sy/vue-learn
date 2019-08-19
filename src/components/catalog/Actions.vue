<template>
    <div>
        <div class="actions">
            <button @click="changeCount(-1)" class="btn btn-danger" :disabled="count===1">-</button>
            <input type="text" class="counter" v-model="count">

            <button @click="changeCount(1)" class="btn btn-success" :disabled="count>=getQuantity">+</button>
        </div>
        <p>В наличии: {{getQuantity}}</p>

    </div>
</template>

<script>
	export default {
		props: ['id'],
		data() {
			return {
                count: 1,
            }
        },
		methods: {
			changeCount(val) {
				if((this.count > 1) || (this.count === 1 && val>0)) {
					this.count +=val;
                } else {
                    return false;
                }
			},
		},
        computed: {
	        getQuantity(){
		        return this.$store.getters.getById(this.id, 'products').inventory;
	        }
        },
        components: {

        }
	}
</script>

<style scoped>
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
    margin:10px 0 20px;
    display: flex;
}
</style>