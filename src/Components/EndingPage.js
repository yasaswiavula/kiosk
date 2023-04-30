import React from 'react'
import {Link} from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase';
function EndingPage(){
    const handleClick = async() =>{
        const snapshot = await getDocs(collection(db,"patient"))
        snapshot.forEach((doc) =>{
            console.log(doc.id," =>" , doc.data())
        })
    }
    return(
        <div>
            <h1>Registration Success</h1>
            <Link to='/' replace>Reutrn to Home</Link>
            <button onClick={handleClick}>Click Here to see the stored results</button>
        </div>
    );
}   
   
export default EndingPage;