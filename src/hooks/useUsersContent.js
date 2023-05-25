import React, { useContext } from "react";
import { UserContext } from "../Content/UserContext";

export const useUsersContent = () => {
    return useContext(UserContext);
}