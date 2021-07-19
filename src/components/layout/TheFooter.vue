<template>
  <footer>
    <TheBrand minimal />
    <div class="copyright">
      &copy; {{ year }} {{ author }}
      <!-- <small v-if="isSignedIn">- Welcome, {{ firstName }}</small> -->
    </div>
    <NavBar minimal />
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import TheBrand from './TheBrand.vue'
import NavBar from '../UI/NavBar.vue'
const store = useStore()
const isSignedIn = computed(() => {
  return store.getters.isSignedIn
})
const author = computed(() => {
  return store.state.app.author
})
const year = computed(() => {
  return store.getters.currentVersionYear
})
</script>

<style scoped>
footer {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  justify-content: space-between;
  align-items: center;
  padding: var(--sp-padding);
  opacity: 0.8;
  box-shadow: 0 0 3px var(--clr-fg);
  margin-block-start: var(--sp-margin);
}
.copyright {
  font-size: small;
}
</style>
