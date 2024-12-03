import React, { useState, useEffect } from "react";
import { getFirestore, collection, addDoc, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { app } from "../firebase";

const firestore = getFirestore(app);

function ListUsers() {
  const [username, setUsername] = useState("");
  const [age, setUserage] = useState("");
  const [userList, setUserList] = useState([]); // State to store user names

  const WriteData = async () => {
    console.log(username, age);

    if (!username || !age) {
      alert("Please Enter Name and Age");
      return;
    }

    await addDoc(collection(firestore, "users"), {
      Name: username,
      Age: age,
    });

    setUsername("");
    setUserage("");
  };

  const updateUser = async (id, newName) => {


      const docRef = doc(firestore, "users", id); 
      await updateDoc(docRef, { Name: newName });
      console.log("updated with ID:", id);
    }



  useEffect(() => {
    const colRef = collection(firestore, "users");

    const unsubscribe = onSnapshot(colRef, (snapshot) => {
        console.log(snapshot);
      const users = snapshot.docs.map((doc) => ({
        id: doc.id, 
        ...doc.data(),
      }));
      console.log(users)
      setUserList(users);
    });

    return () => {
      unsubscribe();
    };
  }, []); 

  return (
    <>
      <div>
        <h1>Add Users</h1>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="Enter Name"
        />

        <input
          onChange={(e) => setUserage(e.target.value)}
          value={age}
          type="number"
          placeholder="Enter Age"
        />
        <button onClick={WriteData}>Add User</button>
      </div>
      <br />

      <div>
        <h2>Users List</h2>
        <ol>
          {userList.map((user, index) => (
            <li key={index}>
              {user.Name}  - age {user.Age}
              <button
                onClick={() => {
                  const newName = prompt("Enter new name:", user.Name);
                  if (newName) updateUser(user.id, newName);
                }}
              >
                Update
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ListUsers;
