import './RegistrationPage.css'
function SickleCell(props){
    const {handleSicklecell} = props
    return(
        <div className='main-container'>
            <label className='qStyle'>Has your child any of the following?</label><br/> 
            <select onChange={(event) => handleSicklecell(event.target.value)} className='inputStyle'>
                <option value={"ESI2 -- Fever"}>Fever</option>
                <option value={"ESI2 -- Fast or noisy breathing"}>Fast or Noisy breathing</option>
                <option value={"ESI1 -- Cheast Pain"}>Cheast Pain</option>
                <option value={"ESI3 -- None"}>None</option>
            </select>
        </div>
    )

}

export default SickleCell
