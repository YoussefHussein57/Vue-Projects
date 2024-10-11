<template>
  <div id="app">
<particles-background></particles-background>
    
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
import ParticlesBackground from './components/ParticlesBackground.vue';

export default {
  name: 'App',
  components: {
    MyNavbar,
    ParticlesBackground,
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  position: relative;
  min-height: 100vh;
}

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
