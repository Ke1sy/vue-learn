<template>
  <div class="container">
      <tabs></tabs>
      <br>
      <iframe width="1300" height="700" src="https://www.youtube.com/embed/eHk4ad1qn8s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>

import tabs from '../components/AliveTabs';

export default {
  name: "home",
    data() {
  	return {

    }
  },
  components: {
	  tabs,
  },
    provide: function() {
      return {
      }
    }
};
</script>

<style scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
