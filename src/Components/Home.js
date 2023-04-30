import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
function Home(){
    return(
        <>
            <h1 className='heading'>Welcome to the Self Registration Kisok</h1>
            <div className="navigateBtn">
                <Link className='btn' to="register" replace>Start Registration</Link>
            </div>
        </>
    );
}

export default Home;