import $ from "jquery";
import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";
import "popper.js";
import "bootstrap";

Vue.config.productionTip = false;

new Vue({
	data () {
		return {
			url: '',
		}
	},
	router,
	store,
	beforeMount: function () {
		this.url = this.$el.attributes['data-url'].value;
	},
	render: h => h(App),
}).$mount("#app");
