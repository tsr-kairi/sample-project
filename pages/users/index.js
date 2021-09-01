import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';

function index({ users }) {
    const router = useRouter()
    return (
        <div className="m-5">
            <h3 className="text-center">Users List</h3>
            <table className="table table-dark table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        return (<tr onClick={() =>{router.push(`/users/${user.id}`)}}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>);
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default index

export async function getStaticProps(){
    try {
        
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/`)

        return {
            props : {
                users : response.data
            }
        }

    } catch (error) {
        console.log(error);
    }
}