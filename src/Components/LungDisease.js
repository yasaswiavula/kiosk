import './RegistrationPage.css'
import Albuterol from './Alubuterol'
import { useState } from 'react'
function LungDisease(props){
    const {handleLung} = props
    const [medication, setMedication] = useState(false)
    return(
        <div className="main-container">
            <label className="qStyle">Have you given any medications in the past 24 hours to help with breathing?</label><br/>
            <select value={medication} onChange={(event) => setMedication(event.target.value)} className="inputStyle">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select><br/>
            {medication && <Albuterol/>}
            <label className='qStyle'>Do you monitor your Oxygen @home</label><br/>
            <select onChange={(event) => handleLung(event.target.value)} className='inputStyle'>
                <option value="ESI-2">Yes{" if it is lower than usual or less than 92%"}</option>
                <option value="ESI-3">No</option>
            </select>
        </div>
        
    )
}
export default LungDisease
