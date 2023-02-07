import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
 
const authenticateUser = () =>{
    //API Call to check authentication
}
const Title = () => (
    <a href="/">
    <img 
     className="logo"
     src="https://tse4.mm.bing.net/th?id=OIP.WRUnwFa0F_sBiU8T1SOrAwHaHa&pid=Api&P=0"
     alt="logo"
    /> 
    </a>
       
);

const Header = () => {
    const [isLoggedIn,setIsLoggedIn] = useState("false")
    const title = "Food Villa"
    return(
        <div className="header">
            <Title />
            <h1>{title}</h1>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            {isloggedIn ? (
            <button onClick={() =>setIsLoggedIn(false)}>Logout</button>
            ):(
            <button onClick={() =>setIsLoggedIn(true)}>Logout</button>
            )}
        </div>
    );
};
export default Header;