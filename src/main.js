import { createApp } from 'vue'

import './index.css'

import App from './App.vue'
import router from './router'
import store from './store'

// Firebase App (the core Firebase SDK) is always required and must be listed first
import { initializeApp } from 'firebase/app'

// Add the Firebase products that you want to use
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

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
createApp(App).use(router).use(store).use(firebaseApp).mount('#app')
