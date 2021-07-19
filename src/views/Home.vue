<template>
  <h1>{{ appName }}</h1>
  <h2>The social network for cats.</h2>
  <h2>What is {{ appName }}?</h2>
  <h3 v-if="isSignedIn">Welcome, {{ firstName }}</h3>
  <p>
    {{ appName }} is a safe place for cats to talk about their day-to-day
    activities, show off their pet humans, compete against each other with games
    and make new friends and enemies along the way.
  </p>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const firstName = computed(() => {
  return store.getters.firstName
})
const isSignedIn = computed(() => {
  return store.getters.isSignedIn
})
const appName = computed(() => {
  return store.state.app.name
})
const author = computed(() => {
  return store.state.app.author
})
const version = store.getters.firstVersionNumber
const versionDate = computed(() => {
  return store.state.app.version[0].date
})
</script>
