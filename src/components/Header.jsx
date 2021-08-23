import React from 'react'
import logo from "../assets/images/logo.png";

const Header = () => {
    return (
        <header className="header">
            <nav>
                <div className="logo">
                    <img src={logo} alt="TodoList"></img> 
                </div>
                <p>TO-DO LIST</p>
            </nav>

        </header>
    )
}

export default Header
