import {useEffect, useState} from "react"

const apiURL = "https://dummyjson.com/users"
export default function UsersList(){
    const[users, setUsers]=useState([])
    //using useEffect
    useEffect(()=>{
        console.log("invoke!! use effect!")
      
    }
        
    )
    useEffect(()=>{
        console.log("invoke!! use effect the first rendering (create component)")
        loadUsers()
    },[]
        
    )
    const loadUsers = () =>{
        let url = `https://dummyjson.com/docs/users?limit=${pagination.limit}&kip=${pagination.skip}`
        pagination.skip+=pagination.limit
        let pagination = {
            skip:0,
            limit:5,

        }
        fetch(apiURL)
        .then(res=>res.json())
        .then(data=>{
            setUsers(data.users)
            console.log(users)
            
        })

    }
    return(
        <>
        <h2>Users Lits</h2>
        <ol>
            {
                users.map(u=><li key={u.id}>{u.firstName} {u.latName} ..</li>)
            }
        </ol>
        </>
    )
}