import React, { useState } from "react";
import style from './newuser.css';
import { v4 as uuidv4 } from 'uuid';
import { useUsersContent } from "../hooks/useUsersContent";

const NewUser = (props) => {
    const {setUsers} = useUsersContent()
    const [userName, setUserName] = useState({name: ''});
    const { name } = userName;

    const handleChange = (e) => {
        setUserName((prevUser) => {
            return {...prevUser, [e.target.name]: e.target.value};
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {id: uuidv4(), name: userName.name};
        setUsers((prevUsers) => [...prevUsers, newUser]);
        setUserName({name: ''});
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">UserName : </label>
                    <input type="text" onChange={handleChange} value={name} name="name" id="name" required />
                </div>
                <button type="submit">Add User</button>
            </form>
        </div>
    )
}

export default NewUser;