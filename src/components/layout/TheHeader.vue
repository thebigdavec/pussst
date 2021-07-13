<template>
  <header>
    <div class="brand">
      <div class="logo">
        <img src="../../assets/images/cat-yin-yang-256.png" alt="" />
      </div>
      <div class="title">{{ appName }}</div>
    </div>
    <nav>
      <ul>
        <li><RouterLink :to="{ name: 'Home' }">Home</RouterLink></li>
        <li><RouterLink :to="{ name: 'Friends' }">Friends</RouterLink></li>
        <li><RouterLink :to="{ name: 'Sign Out' }">Sign Out</RouterLink></li>
        <li><RouterLink :to="{ name: 'Sign In' }">Sign In</RouterLink></li>
        <li><RouterLink :to="{ name: 'Sign Up' }">Sign Up</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>
// //
<script setup>
import { useStore } from 'vuex'
const store = useStore()
const appName = store.state.app.name
</script>

<style scoped>
header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  padding: var(--sp-padding);
}
.brand {
  display: flex;
  align-items: center;
  gap: var(--sp-gap);
}
.logo {
  width: 2rem;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 50px;
}
.logo img {
  width: 100%;
}
.title {
  font-weight: 900;
  letter-spacing: 1px;
  font-size: 2rem;
}
nav ul {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  gap: var(--sp-gap);
  font-family: var(--ff-body);
}
</style>
