import './SuicideScreeningForm.css'
import PositiveForm from './PositiveForm';
import { useState } from 'react';
function SuicideScreeningForm(){
    const [positive,setPositive] = useState(false)
    const handleChange = (event) =>{
        if(event.target.value === 'yes'){
            setPositive(true)
        }
        else{
            setPositive(false)
        }
    }
    return(
        <div>
            <div className="que_1">
                <label className="qStyle" for="que_1">Does the patient exhibit signs of self-harm or suicidal thoughts or actions?</label><br/>
                <select className='inputStyle' name="que_1" id="que_1">
                    <option>Yes</option>
                    <option>No</option>
                </select><br/>

                <label className='qStyle' for="que_2">Patient presents with a behavioral health issue?</label><br/>
                <select onChange={handleChange} className='inputStyle' name="que_2" id="que_2" >
                    <option value="yes">Yes</option>
                    <option selected value="no">No</option>
                </select>
            </div>
            {positive && <PositiveForm/>}
        </div>
    )
};

export default SuicideScreeningForm;
// Suicide screen. (below)
// 1.       Does the patient exhibit signs of self-harm or suicidal thoughts or actions
// a.       Yes
// b.      No
// Patient presents with a behavioral health issue
//             	Yes
//             	No
// Unable to assess due to patients condition
 
 
// If positive, then other questions should pop-up
 
// 2.       Have you wished you were dead or wished you could go to sleep and not wake up?
// a.       Yes
// b.      No
// 3.       In the past month, have you actually had thoughts about killing yourself?
// a.       Yes
// b.      No
 
// If Yes, then answer questions 4,5,6,7,8.  If no, go directly to 8
 
// 4.       In the past month, have you been thinking about how you might kill yourself
// 5.       In the past month, have you had these thoughts and had some intention of acting on them?
// 6.       In the past month, have you started to work out, or worked out the details of how to kill yourself?
// 7.       Do you intend to carry out this plan?
// 8.       Have you ever done anything, started to do anything, or prepared to do anything to end your life?
// 9.       In the past 3 months, have you done anything , started to do anything, or prepared to do anything to end your life?
