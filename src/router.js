import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }, {
      path: "/posts",
      name: "posts",
		  component: () =>
			  import(/* webpackChunkName: "Posts" */"./views/Posts.vue")
    },  {
      path: "/favourites",
      name: "favourites",
		  component: () =>
			  import(/* webpackChunkName: "Favourites" */"./views/Favourites.vue")
    },
    {
      path: "/catalog/",
      name: "catalog",
      component: () =>
        import(/* webpackChunkName: "Catalog" */"./views/Catalog.vue"),
        children: [

        ]
    },
      {
		  path: '/product/:id',
		  name: 'product',
		  component: () =>
			  import(/* webpackChunkName: "Product" */ "./views/Product.vue")
      }
  ]
});
