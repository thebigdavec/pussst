<template>
  <footer>
    <div class="brand">
      <div class="logo">
        <RouterLink :to="{ name: 'Home' }">
          <img src="../../assets/images/cat-yin-yang-256.png" alt="" />
        </RouterLink>
      </div>
      <div class="title">{{ appName }}</div>
    </div>
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
import NavBar from '../UI/NavBar.vue'
const store = useStore()
const isSignedIn = computed(() => {
  return store.getters.isSignedIn
})
const appName = computed(() => {
  return store.state.app.name
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
.brand {
  display: flex;
  align-items: center;
  gap: 2ch;
}
.logo {
  width: 1.4rem;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 50px;
}
.logo img {
  width: 100%;
}
.title {
  font-weight: 900;
  letter-spacing: 1px;
  font-size: 1.4rem;
}
</style>
