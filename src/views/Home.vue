<template>
  <h2>The social network for cats.</h2>
  <p>This app is called {{ appname }} and it was created by {{ author }}.</p>
  <p>
    The first version was V{{ version }} and was created on {{ versionDate }}.
  </p>
  <h2>What is {{ appname }}?</h2>
  <p>
    {{ appname }} is a safe place for cats to talk about their day-to-day
    activities, show off their pet humans, compete against each other with games
    and make new friends and enemies along the way.
  </p>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const appname = computed(() => {
  return store.state.app.name
})
const author = computed(() => {
  return store.state.app.author
})
const version = computed(() => {
  return store.state.app.version[0].number
})
const versionDate = computed(() => {
  return store.state.app.version[0].date
})
</script>
