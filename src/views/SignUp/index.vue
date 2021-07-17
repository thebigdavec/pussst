<template>
  <h1>Join us!</h1>
  <form @submit.prevent="submitDetails">
    <h3>Fill in the form below to join our Catty Community</h3>
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
          v-model.trim="name"
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
          v-model.trim="email"
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
          minlength="6"
          v-model.trim="password"
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
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
const name = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()
const store = useStore()
onMounted(() => {
  document.getElementById('name').focus()
})
const submitDetails = event => {
  const auth = getAuth()
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(userCredential => {
      updateProfile(auth.currentUser, {
        displayName: name.value
      })
        .then(() => {
          store.dispatch('setCurrentUser', {
            uid: userCredential.user.uid,
            name: userCredential.user.displayName,
            email: userCredential.user.email
          })
        })
        .catch(error => console.log('Error:', error.code, error.message))
      router.push({ name: 'Welcome' })
    })
    .catch(error => {
      if (error.code === 'auth/weak-password') {
        const passwordField = document.getElementById('password')
        passwordField.value = ''
        passwordField.placeholder = 'Please choose a stronger password.'
      }
      console.log('Error:', error.code, error.message)
    })
}
</script>

<style scoped></style>
