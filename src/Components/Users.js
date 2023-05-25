import React from "react";
import User from "./User";
import style from './users.css';
import { useUsersContent } from "../hooks/useUsersContent";

const Users = (props) => {
    const {users} = useUsersContent();

    return (
        <div className="users">
            {users.map((user) => <User user={user} key={user.id} />)}
        </div>
    )
}

export default Users;