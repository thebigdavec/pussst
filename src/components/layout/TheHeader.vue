<template>
  <header>
    <TheBrand />
    <NavBar />
  </header>
</template>

<script setup>
import TheBrand from './TheBrand.vue'
import NavBar from '../UI/NavBar.vue'
</script>

<style scoped>
header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  background-color: var(--clr-bg);
  padding: var(--sp-padding);
  box-shadow: 0 0 3px var(--clr-fg);
  min-height: 5rem;
  z-index: 2;
}
</style>
