import React, { useEffect, useState } from 'react';
import  './RegistrationPage.css'
import LungDisease from './LungDisease';
import SuicideScreeningForm from './SuicideScreeningForm';
import SickleCell from './SickleCell';
import { Link, useNavigate } from 'react-router-dom';
import db from '../firebase';
import {collection, addDoc} from 'firebase/firestore'
function RegistrationPage(){
    const navigate = useNavigate();
    const [Suicide, setSuicide] = useState(false)
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [dob, setDob] = useState("")
    const [cheifcomplaint, setCheifcomplaint] = useState("")
    const [allergies, setAllergies] = useState("")
    const [medications, setMedications] = useState("")
    const [vaccinations, setVaccinations] = useState("")
    const [painscore, setPainscore] = useState("")
    const [injury, setInjury] = useState("")
    const [illness, setIllness] = useState("")
    const [disease, setDisease] = useState("")
    const [sickle,setSickle] = useState("")
    const [lung,setLung] = useState("")
    const changeSuicide = (event) =>{
        if(event.target.value === "yes"){
            setSuicide(true)
        }
        else{
            setSuicide(false)
        }
    }    
    
//   useEffect( async() => {
//     const docRef = await addDoc(collection(db,"patient"),{
//         name:"Gowthami",
//         });
//     console.log(docRef)    
//   }, [])
    useEffect(() => {
      processDisease()
    }, [disease])
    

    const handleForm = () =>{
        if(name && age && dob && cheifcomplaint && allergies && medications && vaccinations && painscore && injury)
            return true
        else
        return false
    }

    const handleSicklecell = (x) =>{
        setSickle(x)
        console.log(sickle)
    }

    const handleMedical = ( event ) =>{
        setDisease(event.target.value)
    }
    const handleLung = (x) =>{
        setDisease(x)
        setLung(x)
    }

    const processDisease = () =>{
        if(disease || lung){
            setDisease(disease)
            setLung(lung)
        }
        
    }


    const handleSubmit = async () =>{
        if(handleForm()){
            const docRef = await addDoc(collection(db,"patient"),{
                Name: name,
                Age:age,
                DOB:dob,
                Cheifcomplaint:cheifcomplaint,
                Allergies:allergies,
                Medications:medications,
                Vaccinations:vaccinations,
                Painscore:painscore,
                Injury:injury,
                Illness:illness,
                suicide:Suicide,
                disease:disease,
                lung:lung
            })
            navigate('/success')
        }
        else{
            alert("Fill the Form Properly to get register")
        }
        
    }
    
    return(
        <div>
            <h1 className='heading'>Register Here</h1>
            <div className='pStyle' >
                <label className='space'>Patient Name</label> 
                <input className='inputStyle' required onInput={ (event) => setName(event.target.value)} type='text' value={name} placeholder='Name' /><br/><br/>
            </div>
            <div className='pStyle'>
                <label className='space'>Age</label>
                <input type='number' required className='inputStyle' value={age} min="1" onInput={(event) => setAge(event.target.value)} placeholder='Age' /><br/><br/>
            </div>
            <div className='pStyle'>
                <label className='space' htmlFor="dob" name="dob">Enter Date of Birth</label>
                <input className='inputStyle' required value={dob} onInput={(event) => setDob(event.target.value)} type='date'/><br/><br/>
            </div>
            <div className='pStyle'>
                <label className='space'>Chief Complaint</label>
                <input className='inputStyle' required value={cheifcomplaint} onInput={(event) => setCheifcomplaint(event.target.value)} type='text' placeholder='Chief Complaint' /><br/><br/>
            </div>
            <div className='pStyle'>
                <label className='space'>Allergies</label>
                <input className='inputStyle' value={allergies} required onInput={(event) => setAllergies(event.target.value)} type='text' placeholder='Allergies' /><br/><br/>
            </div>
            <div className='pStyle'>
                <label className='space'>Medications</label>
                <input className='inputStyle' value={medications} required onInput={(event) => setMedications(event.target.value)} type='text' placeholder='Medications' /><br/><br/>
            </div>
            <div className='pStyle'>
                <label className='space'>Vaccinations</label>
                <input className='inputStyle' type='text' value={vaccinations} required onInput={(event) => setVaccinations(event.target.value)} placeholder='Vaccinations' /><br/><br/>
            </div>
            <div className='pStyle'>
                <label className='space'>Injury</label>
                <input className='inputStyle' type='text' value={injury} required onInput={(event) => setInjury(event.target.value)} placeholder='Injury' /><br/><br/>
            </div>
            <div className='pStyle'>
                <label className='space'>Does your child has any medical problems?</label><br/>
                <select onChange={handleMedical} className='inputStyle'>
                    <option>None</option>
                    <option value="Asthema">Asthema</option>
                    <option value="Cancer">Cancer</option>
                    <option value="Chronic Lung disease">Chronic lung disease</option>
                    <option value="Cystic Fibroids">Cystic Fibroids</option>
                    <option value="Development Delay">Development Delay</option>
                    <option value="Diabetis">Diabetis</option>
                    <option value="Heart conditions">Heart conditions</option>
                    <option value="Organ transplant">Organ transplant</option>
                    <option value="Sickle cell disease">Sickle cell disease</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className='pStyle'>
                <label className='space' htmlFor="illness" name="illness">Exposed to any illness:</label>      
                <select required className='inputStyle' name="illness" id="illness" onChange={(event) => setIllness(event.target.value)}>
                    <option value="None">None</option>
                    <option value="tuberculosis">tuberculosis</option>   
                    <option value="Chicken pox">Chicken pox</option> 
                    <option value="measoles">measoles</option>
                    <option value="pertussis">pertussis</option>
                    <option value="cold">cold</option>
                    <option value="Flu">Flu</option>
                    <option value="Covid">covid</option>
                    <option value="Other">Other</option>
                </select><br/><br/>   
            </div> 
            <div className='pStyle'>
                <label className='space'>Pain Score</label>
                <input className='inputStyle' value={painscore} required onInput={(event) => setPainscore(event.target.value)} type='number' placeholder='Pain Score' /><br/><br/>
            </div>
            <div className='pStyle'>
                <label className='space'>Suicide Screening</label>
                <select required onChange={changeSuicide} className='inputStyle'>
                    <option value="yes">yes</option>
                    <option selected value="No">No</option>
                </select>
            </div>
            {disease === "Chronic Lung disease" && <LungDisease handleLung={handleLung}/>}
            {disease === "Sickle cell disease" && <SickleCell handleSicklecell={handleSicklecell}/>}
            
            <div className='ButtonStyle'>
                <Link onClick={handleSubmit} className='btn' replace >SUBMIT</Link>
            </div>
            {/* {processDisease()} */}
            {/* {Suicide && <SuicideScreeningForm/>} */}
        </div>
    );
}

export default RegistrationPage;