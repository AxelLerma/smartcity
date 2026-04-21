 // auth.js
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";

import {
    doc,
    setDoc,
    getDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

import { auth, db } from "./firebase-config.js";

export function showAlert(Elementid, message) {
    const alert = document.getElementById(Elementid)
    if (!alert) return
    alert.textContent = message
    alert.classList.remove('d-none')
}

export function hideAlert(Elementid) {
    const alert = document.getElementById(Elementid)
    if (!alert) return
    alert.classList.add('d-none')
    alert.textContent = ''
}

export async function registeredUser({ name, email, password, favoriteCity }) {
    const credential = await createUserWithEmailAndPassword(auth, email, password)
    const user = credential.user

    await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name,
        email,
        favoriteCity: favoriteCity || "",
        createdAt: serverTimestamp()
    })

    return user
}

export async function loginUser({ email, password }) {
    const credential = await signInWithEmailAndPassword(auth, email, password)
    return credential.user
}