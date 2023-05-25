import React from "react";
import Users from "./Users";
import style from './home.css';
import NewUser from "./NewUser";
import UsersProvider from "../Content/UserContext";

const Home = () => {
    return (
        <UsersProvider>
            <div className="home">
                <h1>User Management App</h1>
                <NewUser />
                <Users />
            </div>
        </UsersProvider>
    )
}

export default Home;