// TODO: clear event listener at end of time out

<template>
  <h1>Welcome {{ firstName }}</h1>
  <h3>Your details</h3>
  <p>Name: {{ userName }}</p>
  <p>Email: {{ userEmail }}</p>

  <div>
    <BaseProgressBar :time="time" />
    You will shortly be redirected to the home page or you can click to
    continue.
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import BaseProgressBar from '../../components/UI/BaseProgessBar.vue'
const store = useStore()
const router = useRouter()
const time = '10'
const firstName = computed(() => {
  return store.getters.firstName
})
const userName = computed(() => store.state.user.name)
const userEmail = computed(() => store.state.user.email)

onMounted(() => {
  window.addEventListener(
    'click',
    () => {
      router.push({ name: 'Home' })
    },
    {
      once: true
    }
  )
  setTimeout(() => {
    window.removeEventListener(
      'click',
      () => {
        router.push({ name: 'Home' })
      },
      {
        once: true
      }
    )
    router.push({ name: 'Home' })
  }, parseInt(time) * 1000)
})
</script>

<style></style>
