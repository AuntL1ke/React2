import {useState} from "react"

const apiURL = "https://dummyjson.com/users"
export default function UsersList(){
    const[users, setUsers]=useState([])
    const loadUsers = () =>{
        fetch(apiURL)
        .then(res=>res.json())
        .then(data=>{
            setUsers(data.users)
            console.log(users)
            
        })

    }
    loadUsers()
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