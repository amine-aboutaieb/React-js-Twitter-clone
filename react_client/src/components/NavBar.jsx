import React from 'react';
import {Link,NavLink} from 'react-router-dom';


function NavBar({status}){
    return(
        <nav>
            {
                (!status) ? 
                <>
                    <NavLink exact to="/register">Register</NavLink>
                    <NavLink exact to="/login">Login</NavLink>
                </> : 
                <>
                    <NavLink exact to="/feed">Feed</NavLink><br />
                    <NavLink exact to="/me">Me</NavLink><br />
                    <NavLink exact to="/logout">logout</NavLink>
                </>
            }
        </nav>
    );
}

export default NavBar;