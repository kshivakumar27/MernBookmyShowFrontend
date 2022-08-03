import React from "react";
import { Link, useHistory } from "react-router-dom";

function Nav() {

    let history=useHistory();
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-danger">
                <a class="navbar-brand text-light">Book MY Show</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-item nav-link active text-light" to="/adminlogin">Admin</Link>
                        <Link class="nav-item nav-link active text-light" to="/adminregister">Admin Register</Link>
                        <Link class="nav-item nav-link active text-light" to="/login">Login</Link>
                        <Link class="nav-item nav-link text-light" to="/register">Register</Link>
                        <Link class="nav-item nav-link text-light" to="/login" onClick={()=>{
                             window.localStorage.removeItem("app_token");
                             history.push(`/adminlogin`);
                        }}>Logout</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;