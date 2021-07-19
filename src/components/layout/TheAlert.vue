<template>
  <transition name="fade">
    <div v-if="message" :class="type" id="alert">
      <p>{{ message }}</p>
    </div>
  </transition>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const type = computed(() => {
  return store.state.alert.type
})
const message = computed(() => {
  return store.state.alert.message
})
</script>

<style scoped>
#alert {
  position: absolute;
  width: 100%;
  top: 5rem;
  text-align: center;
  padding: var(--sp-padding-small);
  z-index: -1;
}

#alert p {
  margin: 0 auto;
}

.error {
  background-color: red;
}
.success {
  background-color: green;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translatey(-5rem);
}
.fade-enter-active {
  transition: transform 250ms ease-out, opacity 150ms ease-out 100ms;
}
.fade-leave-active {
  transition: opacity 150ms ease-out, transform 250ms ease-out;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translatey(0);
}
</style>
