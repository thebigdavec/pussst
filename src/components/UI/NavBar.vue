<template>
  <nav>
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
nav ul {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  gap: var(--sp-gap);
  font-family: var(--ff-body);
}
.not-minimal {
  display: v-bind(minimalClass);
}
</style>
