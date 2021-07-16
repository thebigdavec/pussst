<template>
  <footer>
    <div class="brand">
      <div class="logo">
        <RouterLink :to="{ name: 'Home' }">
          <img src="../../assets/images/cat-yin-yang-256.png" alt="" />
        </RouterLink>
      </div>
      <div class="title">{{ appName }}</div>
    </div>
    <div class="copyright">&copy; {{ year }} {{ author }}</div>
    <nav>
      <ul>
        <li><RouterLink :to="{ name: 'Home' }">Home</RouterLink></li>
      </ul>
    </nav>
  </footer>
</template>
// //
<script setup>
import { useStore } from 'vuex'
const store = useStore()
const appName = store.state.app.name
const author = store.state.app.author
const year =
  store.state.app.version[store.state.app.version.length - 1].date.split(' ')[2]
</script>

<style scoped>
footer {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  justify-content: space-between;
  align-items: center;
  padding: var(--sp-padding);
  opacity: 0.8;
  box-shadow: 0 0 3px var(--clr-fg);
}
.brand {
  display: flex;
  align-items: center;
  gap: 2ch;
}
.logo {
  width: 1.4rem;
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
  font-size: 1.4rem;
}
nav ul {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  gap: 2ch;
  font-family: var(--ff-body);
}
</style>
