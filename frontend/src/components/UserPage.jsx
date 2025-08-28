import React, { useEffect, useState } from 'react';
import { use } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function UserPage() {
  const {id} = useParams();
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const fetchUser = async () =>{
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`http://localhost:5000/user/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });
        const data = await res.json();
        console.log(data);
        
        if (res.ok) {
          setUser(data);
        } else {
          console.log(data.error || "Failed to fetch user data");
        }
      } catch (err){
        console.log(err);
      }
    }
    fetchUser();
  }, [id]);

  console.log(user);
  
  return (
    <div>
      <h1>id user : {id}</h1>
    </div>
  );
}