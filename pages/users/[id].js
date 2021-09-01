import React from 'react'
import axios from 'axios'


function index({user}) {
    return (
        <div className="m-5">
            <h3>{user.name}</h3>
            <hr />

            <p>Name : <b>{user.name}</b></p>
            <p>Email : <b>{user.email}</b></p>
            <p>Username : <b>{user.username}</b></p>

            <p>Mobile : <b>{user.phone}</b></p>
            <p>Website : <b>{user.website}</b></p>
            <p>Company : <b>{user.company.name}</b></p>
        </div>
    )
}

export default index

export async function getServerSideProps(context){
    try {
        
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${context.query.id}`)

        return {
            props : {
                user : response.data
            }
        }

    } catch (error) {
        console.log(error);
    }
}