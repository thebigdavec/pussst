<template>
  <form @submit.prevent="submitDetails">
    <h1>Join us!</h1>
    <h2>Fill in the form below to join our Catty Community</h2>
    <fieldset>
      <legend>Enter the details of your pet human</legend>
      <div class="form-group">
        <label for="name">
          Name
          <small>(This will be your username)</small>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          autocomplete="username"
          placeholder="Enter username"
          v-model="name"
          autofocus
          required
          @input="echo"
        />
      </div>
      <div class="form-group">
        <label for="email">
          Email
          <!-- <small>(Can be email of your pet human)</small> -->
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autocomplete="email"
          placeholder="Enter email"
          v-model="email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">
          Password
          <small>(must be at least 6 characters long)</small>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          autocomplete="password"
          placeholder="Choose a password"
          v-model="password"
          required
        />
      </div>
    </fieldset>
    <div class="form-group">
      <button type="submit">Sign Up</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
const name = ref('')
const email = ref('')
const password = ref('')
const authUser = ref('')

const submitDetails = event => {
  // console.log(name.value, email.value, password.value)
  authUser.value = getAuth()
  firebase.auth().createUserWithEmailAndPassword(email, password)
}
const echo = () => {
  // console.log(name.value)
}
</script>

<style scoped></style>
