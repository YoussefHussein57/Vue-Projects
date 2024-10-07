<template>
  <div id="app">
    <!-- Navigation Bar for routing between Sections -->
    <my-navbar></my-navbar>
    
    <!-- This is where the route views will be rendered -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import MyNavbar from './components/MyNavbar.vue';
export default {
  name: 'App',
  components: {
    MyNavbar,
  }
  
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.fade-enter-to, .fade-leave {
  opacity: 1;
  transform: scale(1);
}

</style>