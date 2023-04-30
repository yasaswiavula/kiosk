import { useState } from 'react';
import './RegistrationPage.css'
import AdditionalQuestions from './AdditionalQuestions';

function Albuterol(){
    const [addQue, setaddQue] = useState("")
    const [addAns, setAddans] = useState("")
    const handleAddque = (event) =>{
        if(event.target.value === "1-5"){
            setaddQue(true)
        }
        else{
            setaddQue(false)
        }
    }
    const handleAlbuterol = (x) =>{
        setAddans(x)
    }
    return(
        <div>
            <label className='space'>How many treatments?</label><br/>
            <select onChange={handleAddque} className='inputStyle'>
                <option value={"ESI2 -- albuterol"}>{"5"}</option>
                <option value={"1-5"}>1-5</option>
            </select>
            {addQue && <AdditionalQuestions handleAlbuterol={handleAlbuterol}/>}
        </div>
    )
}

export default Albuterol;