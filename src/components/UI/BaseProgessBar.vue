<template>
  <progress max="100" :value="value"></progress>
</template>

<script setup>
import { ref, toRefs, onMounted, computed, defineProps } from 'vue'
const props = defineProps({
  time: String
})
const { time } = toRefs(props)
const timeInMilliseconds = parseInt(time.value) * 1000
const left = ref(0)
let timer = 0
let percentDone = 0
const value = ref(100)
const leftpos = computed(() => {
  return left.value + '%'
})
onMounted(() => {
  let timeAdjust = setInterval(() => {
    timer++
    percentDone = ((timer * 10) / timeInMilliseconds) * 100
    value.value = percentDone
    left.value = percentDone
    if (percentDone >= 100) {
      clearInterval(timeAdjust)
    }
  }, 10)
})
</script>
<style scoped>
progress {
  --paw-color: var(--clr-accent);
  position: relative;
  width: 100%;
}
progress::after {
  content: '';
  position: absolute;
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: var(--paw-color);
  top: 50%;
  left: v-bind(leftpos);
  transform: translate(-50%) rotate(0deg);
  box-shadow: -7px -7px 0 -2px var(--paw-color), 0 -11px 0 -2px var(--paw-color),
    7px -7px 0 -2px var(--paw-color);
  transform-origin: top;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to {
    transform: translate(-50%) rotate(360deg);
  }
}
</style>
