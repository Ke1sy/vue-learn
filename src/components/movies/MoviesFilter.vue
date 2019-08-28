<template>
    <div class="filter-wrap">
        <div :class="['filter-item', isOpen ? 'open' : '']" @click="isOpen = !isOpen">
            <span> {{dropdownText}}</span>
        </div>
        <div class="dropdown" v-show="isOpen">

            <filter-input
                    v-for="category in categories"
                    :key="category.id"
                    :category="category"
                    v-on:gatherData="$emit('returnToForm')"
            >
            </filter-input>
        </div>
    </div>
</template>

<script>
	import FilterInput from './FilterInput.vue';
	import { mapGetters, mapState } from 'vuex';

	export default {
		data() {
			return {
				isOpen: false,
			}
		},
		computed: {
			dropdownText() {
				let checked = this.checkedCategories;
				if (checked.length === 1) {
					return checked[0].text;
				} else if (checked.length > 1) {
					return checked.length + ' параметра';
				} else {
					return 'Выбрать';
				}
			},

			...mapState([
				'categories'
            ]),

            ...mapGetters([
                'checkedCategories'
            ]),
        },

		components: {
			FilterInput: FilterInput
		}
	}
</script>

<style lang="scss">
    
    .dropdown {
        position: absolute;
        padding: 10px 20px;
        width: 100%;
        background: rgb(215, 215, 215);
    }

    .filter-wrap {
        z-index: 2;
        width: 300px;
        position: relative;
        margin: 40px 0;
    }

    .filter-item {
        width: 100%;
        height: 40px;
        border: 1px solid #d7d7d7;
        padding: 10px 20px;
        font-size: 12px;
        text-transform: uppercase;
        position: relative;
    }

    .filter-item::after {
        position: absolute;
        opacity: .5;
        display: block;
        margin-left: 10px;
        height: 16px;
        width: 16px;
        background-repeat: no-repeat;
        transition: .2s;
        content: "";
        top: 30%;
        right: 20px;
        background-size: .8rem;
        -webkit-transform: rotate(90deg);
        transform: rotate(0deg);
        background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDI1NSAyNTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1NSAyNTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iYXJyb3ctZHJvcC1kb3duIj4KCQk8cG9seWdvbiBwb2ludHM9IjAsNjMuNzUgMTI3LjUsMTkxLjI1IDI1NSw2My43NSAgICIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);

    }

    .filter-item.open::after {
        transform: rotate(-180deg);
        top: 25%;
    }
</style>