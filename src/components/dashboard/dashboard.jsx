import React from "react";
import { Redirect } from "react-router-dom";

function Dashboard() {
    console.log(localStorage.getItem('email'));
    const isAuthenticated = localStorage.getItem('email');

    return isAuthenticated ? (
        <p>Hallo</p>
    ) : <Redirect to={{ pathname: '/login' }} />;
}

export default Dashboard;