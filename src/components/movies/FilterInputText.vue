<template>
    <div class="form-group">
        <input type="text" value="" placeholder="Поиск по заголовку..." class="search__input" v-model="searchVal" @keyup="updateFilter()">
    </div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		props: ['category'],
        data() {
			return{
				searchVal: ''
            }
        },
        methods: {
	        updateFilter() {
               // let checkedIds = [];
		       // this.checked.forEach(item => checkedIds.push(item.id));
		       // this.$router.push({ name: 'movies', query: { cat: checkedIds } });
            }
        },
        computed: {
	        ...mapGetters({
		        checked: 'checkedCategories'
	        })
        },
	}
</script>

<style scoped lang="scss">

    .form-group {
        margin-bottom: 10px;
    }

    .search {
        padding: 20px 0;
        &__input {
            width: 100%;
            border-radius: 4px;
            box-shadow: inset 0 0 7px 0 rgba(0, 0, 0, 0.15);
            padding: 10px 20px;
            border: 1px solid #eee;
            margin-bottom: 10px;

        }
    }
</style>