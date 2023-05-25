import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import style from './user.css';
import { useUsersContent } from "../hooks/useUsersContent";

const User = (props) => {
    const {users, setUsers} = useUsersContent();
    const {id, name} = props.user;

    const handleDeleteUser = (id) => {
        const filteredUsers = users.filter((user) => user.id !== id);
        setUsers(filteredUsers);
    }

    return (
        <div className="user">
            <h2>{name}</h2>
            <button onClick={() => handleDeleteUser(id)}><FaTrashAlt /></button>
        </div>
    )
}

export default User;