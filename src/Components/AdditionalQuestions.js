import './RegistrationPage.css'
function AdditionalQuestions(props){
    const {handleAlbuterol} = props

    return(
        <div>
            <label className='qStyle'>Did the treatments help temporarily?</label><br/>
            <select onChange={(event) => handleAlbuterol(event.target.value)} className='inputStyle'>
                <option value={"ESI3 -- albuterol"}>Yes</option>
                <option value={"ESI2 -- albuterol"}>No</option>
            </select>
        </div>
    )
}
export default AdditionalQuestions