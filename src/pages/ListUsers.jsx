import React, { useState } from "react";
import  {getFirestore , collection , addDoc , doc , getDocs} from "firebase/firestore"
import { app } from "../firebase";

const firestore = getFirestore(app)


function ListUsers() {

    const [username, setUsername] = useState("");
    const [age, setUserage] = useState("");
    const [userList, setUserList] = useState([]); // State to store user names

    const WriteData = async()=>{

        console.log(username , age)

        if(!username||!age){
            alert("Please Enter Name and Age");
            return;
        }

        await addDoc(collection(firestore , "users"),{
            Name : username,
            Age  :age
        })

        setUsername("");
        setUserage("");
    }

    const retrieveData = async()=>{
        const querySnapshot = await getDocs(collection(firestore , "users"));
        const users = [];
        querySnapshot.forEach((element) => {
          users.push(element.data().Name);
        });
        setUserList(users); 
    }

    return (
        <>
        <div>
            <h1>Add Users</h1>
            <input
            onChange={(e)=>setUsername(e.target.value)}
            value={username}
             type="text" placeholder="Enter Name"  />

            <input 
            onChange={(e)=>setUserage(e.target.value)}
            value={age}
            type="number" placeholder="Enter Age" />
            <button onClick={WriteData}>Add User</button>

        </div><br />

        <button onClick={retrieveData}>Show Users</button>
        <div>
            <ol>
                {userList.map((element, index)=>{
                    return <li key={index}>{element}</li>;
                })}
            </ol>
        </div>  
        </>
    );
}

export default ListUsers;