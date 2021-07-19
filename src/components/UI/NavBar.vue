<template>
  <nav>
    <!-- Mobile Navigation -->
    <div id="nav-mobile">
      <button
        class="access-menu not-minimal"
        @click="toggleNavOverlay"
      ></button>
      <ul
        @click="toggleNavOverlay"
        class="nav-mobile not-minimal"
        :class="isMenuOpen && 'active'"
      >
        <button class="close-menu"></button>
        <li v-if="!isSignedIn">
          <RouterLink :to="{ name: 'Sign In' }">Sign In</RouterLink>
        </li>
        <li v-if="!isSignedIn">
          <RouterLink :to="{ name: 'Sign Up' }">Sign Up</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
        </li>
        <li v-if="isSignedIn">
          <RouterLink :to="{ name: 'Friends' }">Friends</RouterLink>
        </li>
        <li v-if="isSignedIn">
          <button @click="signOut">Sign Out</button>
        </li>
      </ul>
    </div>
    <!-- Desktop Navigation -->
    <ul class="nav-desktop">
      <li>
        <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
      </li>
      <li class="not-minimal" v-if="isSignedIn">
        <RouterLink :to="{ name: 'Friends' }">Friends</RouterLink>
      </li>
      <li class="not-minimal" v-if="isSignedIn">
        <button @click="signOut">Sign Out</button>
      </li>
      <li class="not-minimal" v-if="!isSignedIn">
        <RouterLink :to="{ name: 'Sign Up' }">Sign Up</RouterLink>
      </li>
      <li class="not-minimal" v-if="!isSignedIn">
        <RouterLink :to="{ name: 'Sign In' }">Sign In</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { getAuth } from 'firebase/auth'

const router = useRouter()
const store = useStore()
const auth = getAuth()

const isMenuOpen = ref(false)
const toggleNavOverlay = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const props = defineProps({
  minimal: Boolean
})
const minimalClass = computed(() => (props.minimal ? 'none' : 'inline'))

const isSignedIn = computed(() => {
  return store.getters.isSignedIn
})
const signOut = () => {
  auth.signOut()
  store.dispatch('showAlert', {
    type: 'success',
    message: 'You have successfully signed out.'
  })
  router.push({ name: 'Home' })
}
</script>

<style scoped>
nav #nav-mobile {
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  justify-content: flex-end;
  align-items: center;
  color: var(--clr-fg);
  cursor: pointer;
  margin-inline-start: auto;
}
nav #nav-mobile button.access-menu {
  width: 100%;
  height: 15%;
  padding: 0;
  opacity: 0.75;
  border: none;
  color: inherit;
  background-color: currentColor;
  border-radius: 99vw;
  box-shadow: 0 0.5rem 0 currentColor, 0 -0.5rem 0 currentColor;
  transition: opacity 500ms ease-out;
  z-index: 1;
}
nav #nav-mobile button.close-menu {
  position: absolute;
  padding: 0;
  border: none;
  color: inherit;
  background-color: transparent;
  border-top: 3px solid currentColor;
  border-left: 3px solid currentColor;
  transform: rotate(45deg);
  top: var(--sp-base);
  right: var(--sp-base);
  width: 1.5rem;
  height: 1.5rem;
  box-shadow: none;
}
nav ul.nav-mobile {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--sp-gap);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0;
  list-style: none;
  font-size: 7.5vw;
  text-transform: uppercase;
  background-color: var(--clr-semiopaque-bg);
  transform: translatey(-100%);
  z-index: 2;
  transition: transform 200ms ease-in;
  backdrop-filter: blur(5px);
}
nav ul.nav-mobile li {
  padding: var(--sp-padding);
}
nav ul.nav-mobile.active {
  transform: translatey(0);
}
nav ul.nav-desktop {
  display: none;
}

@media (min-width: 768px) {
  /* desktop size and above */
  nav #nav-mobile {
    display: none;
  }
  nav ul.nav-desktop {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    gap: var(--sp-gap);
    font-family: var(--ff-body);
  }
}
.not-minimal {
  display: v-bind(minimalClass);
}
</style>
