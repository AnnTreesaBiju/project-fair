import './App.css';
import {Routes,Route} from 'react-router-dom'
import Homes from './Pages/Homes';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dasboard from './Pages/Dasboard';
import Projects from './Pages/Projects';
import Footer from './Components/Footer';
function App() {
  return (
    <div>
   <Routes>
    <Route path='/' element={<Homes/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/dashbord' element={<Dasboard/>}></Route>
    <Route path='/projects' element={<Projects/>}></Route>
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
