<template>
  <TheAlert />
  <TheHeader />
  <div class="container">
    <RouterView />
  </div>
  <TheFooter />
</template>

<script setup>
import TheHeader from './components/layout/TheHeader.vue'
import TheAlert from './components/layout/TheAlert.vue'
import TheFooter from './components/layout/TheFooter.vue'
import Home from './views/Home.vue'
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style></style>
