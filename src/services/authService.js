// services/auth.js
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, collection, getDoc, updateDoc } from 'firebase/firestore'
import { encrypt } from '../utils'

export const signIn = async (username, password) => {
  const auth = getAuth()
  const db = getFirestore()

  const logInUser = await signInWithEmailAndPassword(auth, username.toLowerCase(), password)
  const userAuth = logInUser.user

  const userRef = doc(collection(db, 'user'), userAuth.uid)
  const userData = await getDoc(userRef)

  if (password !== userData.data().password) {
    await updateDoc(userRef, { password })
  }

  const encryptedEmail = await encrypt(userAuth.email.toLowerCase())
  const encryptedPass = await encrypt(password)
  const encryptedRole = await encrypt(userData.data().role)

  localStorage.setItem('id', encryptedEmail)
  localStorage.setItem('key', encryptedPass)
  localStorage.setItem('role', encryptedRole)

  return userData
}
