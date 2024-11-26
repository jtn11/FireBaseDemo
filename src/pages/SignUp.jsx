import React, { useState } from "react";
import { getAuth , createUserWithEmailAndPassword , GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import { app } from "../firebase";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const SignUpPage = ()=>{

    const [email , setemail] = useState("");
    const [password , setPassword] = useState("");

    const createUser = async()=>{
        const Cred =  await createUserWithEmailAndPassword(auth , email , password);
        alert("success")
    }

    const signupWithGoogle =()=>{
        signInWithPopup(auth, googleProvider)
    }

    return (
        <div className="signupPage">
            <h1>Sign Up</h1>
            <label htmlFor="">Email</label>
            <input
             onChange={(e)=>setemail(e.target.value)}
             value={email}
             type="email" required placeholder="Enter Email here" />

            <label htmlFor="">Password</label>
            <input 
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            type="password" required 
            placeholder="Enter Password here" />

            <br />
            <button onClick={signupWithGoogle}>Sign In with google</button>

            <button onClick={createUser}>Signup</button>
        </div>
    )
}

export default SignUpPage;