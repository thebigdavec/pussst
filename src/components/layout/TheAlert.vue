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
  z-index: 1;
  color: var(--clr-light);
}

#alert p {
  width: fit-content;
  display: block;
  position: relative;
  margin: 0 auto;
}
#alert p::before,
#alert p::after {
  content: '';
  position: absolute;
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: currentColor;
  opacity: 0.8;
  top: 50%;
  box-shadow: -7px -7px 0 -2px currentColor, 0 -11px 0 -2px currentColor,
    7px -7px 0 -2px currentColor;
  transform-origin: top;
}
#alert p::before {
  left: -1.5rem;
  transform: translatey(-50%) rotate(-10deg);
  animation: wave-before 0.5s infinite alternate ease-in-out;
}
#alert p::after {
  right: -1.5rem;
  transform: translatey(-50%) rotate(10deg);
  animation: wave-after 0.5s infinite alternate ease-in-out;
}
@keyframes wave-before {
  to {
    transform: translatey(-50%) rotate(10deg);
  }
}
@keyframes wave-after {
  to {
    transform: translatey(-50%) rotate(-10deg);
  }
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
