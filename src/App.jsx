import { useState } from 'react'
import {getDatabase, set,ref} from "firebase/database"
import { app } from './firebase'

import './App.css'
import { getAuth} from 'firebase/auth'
import SignUpPage from './pages/SignUp'
import SignInPage from './pages/SignIn'
import ListUsers from './pages/ListUsers'


const auth = getAuth(app);   // this is how we create an instance(auth) for different operations



function App(){

 return (
  <div>
    {/* <SignUpPage/>
    <SignInPage/> */}
    <ListUsers/>
  </div>
 )
}

export default App
