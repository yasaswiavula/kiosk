import './RegistrationPage.css'
function PositiveForm(){
    return(
        <div className='que_1'>
            <label className='qStyle'>Have you ever wished you were dead or wished you could go to sleep and not wake up?</label><br/>
            <select className='inputStyle'>
                <option>Yes</option>
                <option>No</option>
            </select><br/>
            <label className='qStyle'>In the past month, have you actually had thoughts about killing yourself?</label><br/>
            <select className='inputStyle'>
                <option>Yes</option>
                <option>No</option>
            </select>
        </div>
    )
}

export default PositiveForm;