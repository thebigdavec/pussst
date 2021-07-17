import { createApp } from 'vue'

import './index.css'

import App from './App.vue'

// Firebase App (the core Firebase SDK) is always required and must be listed first
import { initializeApp } from 'firebase/app'

// Add the Firebase products that you want to use
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDz51KOsz_TkcQ-rq_h_jS34Dn5TZApBEk',
  authDomain: 'pussst-afb48.firebaseapp.com',
  projectId: 'pussst-afb48',
  storageBucket: 'pussst-afb48.appspot.com',
  messagingSenderId: '710451076574',
  appId: '1:710451076574:web:e7490561097d69e1df514f',
  measurementId: 'G-EVCGBNTPE9'
}
const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

import router from './router'
import store from './store'

import { onAuthStateChanged } from 'firebase/auth'
onAuthStateChanged(auth, user => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid
    store.dispatch('setCurrentUser', {
      uid,
      email: user.email,
      name: user.auth.currentUser.displayName
    })
    // store.dispatch('saveEmail', user.email)
    // store.dispatch('saveName', user.auth.currentUser.displayName)
    // ...
  } else {
    // User is signed out
    // ...
    store.dispatch('signOut')
    console.log('User is signed out.')
  }
})
createApp(App).use(router).use(store).use(firebaseApp).mount('#app')
