<template>
  <h1>Sign in to see what's happening!</h1>
  <form @submit.prevent="submitDetails">
    <h3>Fill in the form below to catch up.</h3>
    <fieldset>
      <legend>Enter the details of your pet human</legend>
      <div class="form-group">
        <label for="email">
          Email
          <small>(the email you signed up with)</small>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autocomplete="email"
          placeholder="Enter email"
          v-model="email"
          autofocus
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
      <button type="submit">Sign In</button>
    </div>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
const name = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()
const store = useStore()
const submitDetails = event => {
  console.log(name.value, email.value, password.value)
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(userCredential => {
      console.log(userCredential.user)
      store.dispatch('saveEmail', email.value)
      store.dispatch('saveName', userCredential.user.displayName)
      router.push({ name: 'Home' })
    })
    .catch(error => {
      console.log('Error:', error.code, error.message)
    })
}
</script>

<style scoped></style>
