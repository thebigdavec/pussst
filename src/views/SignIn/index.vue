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
      <div>
        Forgotten your password?
        <RouterLink :to="{ name: 'request-password-reset' }">
          Click here
        </RouterLink>
        to request a password reset.
      </div>
    </fieldset>
    <div class="form-group">
      <button type="submit">Sign In</button>
    </div>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
const name = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()
const store = useStore()
onMounted(() => {
  document.getElementById('email').focus()
})
const submitDetails = event => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(userCredential => {
      store.dispatch('setCurrentUser', {
        uid: userCredential.user.uid,
        name: userCredential.user.displayName,
        email: userCredential.user.email
      })
      store.dispatch('showAlert', {
        type: 'success',
        message: `Sign in successful. Welcome back, ${store.getters.firstName}`,
        time: 3
      })
      router.push({ name: 'Welcome' })
    })
    .catch(error => {
      switch (error.code) {
        case 'auth/wrong-password':
          store.dispatch('showAlert', {
            type: 'error',
            message:
              'Unable to find an account with that email and password combination. Please try again.'
          })
          break
        case 'auth/too-many-requests':
          store.dispatch('showAlert', {
            type: 'error',
            message: 'You have made too many attempts. Please try later.'
          })
          break
        default:
          store.dispatch('showAlert', {
            type: 'error',
            message: 'An unknown error occurred.'
          })
      }
      console.log('Error:', error.code, error.message)
    })
}
</script>

<style scoped></style>
