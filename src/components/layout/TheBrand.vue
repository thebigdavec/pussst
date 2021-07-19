<template>
  <div class="brand">
    <div class="logo">
      <RouterLink :to="{ name: 'Home' }">
        <img src="../../assets/images/cat-yin-yang-256.png" alt="" />
      </RouterLink>
    </div>
    <div class="title not-minimal">{{ appName }}</div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const props = defineProps({
  minimal: Boolean
})
const minimalClass = computed(() => (props.minimal ? 'none' : 'inline'))

const appName = computed(() => {
  return store.state.app.name
})
</script>

<style scoped>
.brand {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: var(--sp-gap);
  font-size: 1.5rem;
}
.logo {
  width: 1.5rem;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 99vw;
}
.logo img {
  display: block;
  width: 100%;
}
.title {
  font-weight: 900;
  letter-spacing: 1px;
  font-size: var(--fs);
}
.not-minimal {
  display: v-bind(minimalClass);
}
@media (min-width: 768px) {
  .not-minimal {
    display: inline;
  }
}
</style>
