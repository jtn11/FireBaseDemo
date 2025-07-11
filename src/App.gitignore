import { useState } from 'react'
import {getDatabase, set,ref} from "firebase/database"
import { app } from './firebase'

import './App.css'

//this is how database is created and data is sent in RealTimeDatabase
// const db  = getDatabase(app)

// function App() {
  
//   const putdata = ()=>{
//     set(ref(db, 'users/jatin'),{
//       id : 1,
//       name : "Jatin",
//       age : 21
//     })
//   }


import {createUserWithEmailAndPassword, getAuth , onAuthStateChanged } from 'firebase/auth'
import SignUpPage from './pages/SignUp'
import SignInPage from './pages/SignIn'
import { useEffect } from 'react'

const auth = getAuth(app);   // this is how we create an instance(auth) for different operations 


function App(){


 return (
  <div>
    <SignUpPage/>
    <SignInPage/>
  </div>
 )
}

export default App
