<template>
    <div class="form-group">
        <input type="checkbox" :value="category.name" :id="'category-' + category.id" v-model="category.checked" @change="updateFilter">
        <label :for="'category-' + category.id" :class="{active : category.checked}">
            {{category.text}}
        </label>
    </div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		props: ['category'],
        methods: {
	        updateFilter() {
               let checkedIds = '';
		       this.checked.forEach((item, i) => i === (this.checked.length - 1) ? checkedIds += item.id : checkedIds += item.id + ',' );
		       this.$router.push({ name: 'movies', query: { cat: checkedIds } });
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

    label {
        position: relative;
        min-height: 20px;
        font-size: 13px;
        line-height: 20px;
        padding-left: 30px;
        display: flex;
        align-items: center;
        cursor: pointer;

        &::before {
            content: "";
            display: inline-block;
            vertical-align: sub;
            width: 18px;
            height: 18px;
            border: 1px solid;
            position: absolute;
            left: 0;
            top: 0;
        }


        &.active {
            &::before {
                background-size: 16px;
                background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTUwNC41MDIsNzUuNDk2Yy05Ljk5Ny05Ljk5OC0yNi4yMDUtOS45OTgtMzYuMjA0LDBMMTYxLjU5NCwzODIuMjAzTDQzLjcwMiwyNjQuMzExYy05Ljk5Ny05Ljk5OC0yNi4yMDUtOS45OTctMzYuMjA0LDAgICAgYy05Ljk5OCw5Ljk5Ny05Ljk5OCwyNi4yMDUsMCwzNi4yMDNsMTM1Ljk5NCwxMzUuOTkyYzkuOTk0LDkuOTk3LDI2LjIxNCw5Ljk5LDM2LjIwNCwwTDUwNC41MDIsMTExLjcgICAgQzUxNC41LDEwMS43MDMsNTE0LjQ5OSw4NS40OTQsNTA0LjUwMiw3NS40OTZ6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);

            }
        }
    }

    input {
        position: absolute;
        width: 0;
        height: 0;
        line-height: 0;
        visibility: hidden;
        z-index: -1;
    }



</style>