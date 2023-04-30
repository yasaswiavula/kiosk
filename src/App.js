import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import EndingPage from './Components/EndingPage';
import RegistrationPage from './Components/RegistrationPage';


function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<RegistrationPage/>}/>
          <Route path='/success' element = {<EndingPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;


