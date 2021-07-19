<template>
  <nav>
    <div id="nav-mobile">
      <button class="burger not-minimal"></button>
    </div>
    <ul>
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
import { computed, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { getAuth } from 'firebase/auth'

const router = useRouter()
const store = useStore()
const auth = getAuth()

const props = defineProps({
  minimal: Boolean
})
const minimalClass = computed(() => (props.minimal ? 'none' : 'inline'))

const isSignedIn = computed(() => {
  return store.getters.isSignedIn
})
const signOut = () => {
  auth.signOut()
  router.push({ name: 'Home' })
}
</script>

<style scoped>
nav #nav-mobile {
  display: flex;
  width: 2rem;
  height: 2rem;
  justify-content: flex-end;
  align-items: center;
  color: var(--clr-fg);
  cursor: pointer;
  margin-inline-start: auto;
}
nav #nav-mobile button {
  width: 100%;
  height: 15%;
  padding: 0;
  color: inherit;
  background-color: currentColor;
  box-shadow: 0 0.7rem 0 currentColor, 0 -0.7rem 0 currentColor;
}
nav ul {
  display: none;
}
@media (min-width: 768px) {
  /* desktop size and above */
  nav #nav-mobile {
    display: none;
  }
  nav ul {
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
