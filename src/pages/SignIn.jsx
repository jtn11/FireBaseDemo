import React, { useState } from "react";
import { getAuth , signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";



const SignInPage = () =>{

    const [email , setemail] = useState('');
    const [password , setPassword] = useState('');

    const auth = getAuth(app)

    const SignInUser  = ()=>{
        signInWithEmailAndPassword(auth , email , password)
        .then((value )=>console.log("Sign in successfull"))
        .catch(err =>console.log(err))

    }

    return(
        <div>
            <h1>Sign In here</h1>
            <div>
                <label htmlFor="">Enter your Email</label>
                <input onChange={(e)=> setemail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter you Email" />

                <label htmlFor="">Enter your Password</label>
                <input onChange={(e)=>setPassword(e.target.value)}
                 value={password}
                 type="password" placeholder="Enter you Password" />

                <button onClick={SignInUser}>Sign In</button>
            </div>
        </div>
    )
}

export default SignInPage; 