<template>
  <h1>Request Password Reset</h1>
  <form @submit.prevent="sendPasswordResetRequest">
    <h3>
      Fill in the form below and an email will be sent with a link to reset your
      password.
    </h3>
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
        autofocus
      />
    </div>
    <div class="form-group">
      <button type="submit">Send Reset Request</button>
    </div>
  </form>
</template>
<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
const email = ref('')
const store = useStore()
const auth = getAuth()
const sendPasswordResetRequest = () => {
  sendPasswordResetEmail(auth, email.value)
    .then(() => {
      store.dispatch('showAlert', {
        type: 'success',
        message:
          'A password reset email has been successfully sent. Please check your inbox.'
      })
    })
    .catch(error => {
      switch (error.code) {
        case 'auth/user-not-found':
          store.dispatch('showAlert', {
            type: 'error',
            message: 'No user was found with that email.',
            time: 5
          })
          break
        default:
          store.dispatch('showAlert', {
            type: 'error',
            message: 'Oops! An unknown error occured. Please try again.'
          })
      }
      console.log(
        'Error sending password reset email:',
        error.code,
        error.message
      )
    })
}
</script>
