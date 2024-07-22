import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './User/Login';
import Cabs from './User/Cabs';
import Bookcab from './User/Bookcab';
import Addcar from './Admin/Addcar';
import Mybookings from './User/Mybookings';

import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Register from './User/Register';
import Home from './Components/Home';
import Alogin from './Admin/Alogin';
import Users from './Admin/Users';
import Anav from './Admin/Anav';
import Bookings from './Admin/Bookings';
import UserEdit from './Admin/UserEdit';
import Ahome from './Admin/Ahome';
import Acabs from './Admin/Acabs';
import Acabedit from './Admin/Acabedit';
import Uhome from './User/Uhome';
import Asignup from './Admin/ASignup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

      {/* <Route path='/' element={<Home/>}/> */}
      <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Register/>} />
      {/* <Route path='/unav' element={<Unav/>} /> */}

{/* Admin */}
      <Route path='/alogin' element={<Alogin/>}/>
      <Route path='/asignup' element={<Asignup/>}/>
      <Route path='/anav' element={<Anav/>} />
      <Route path='/ahome' element={<Ahome/>} />
      <Route path='/users' element={<Users/>} />
      <Route path="/useredit/:id" element={<UserEdit/>}/>
      <Route path='/bookings' element={<Bookings/>} />
      <Route path='/acabs' element={<Acabs/>}/>
      <Route path="/acabedit/:id" element={<Acabedit/>}/>
      <Route path='/addcab' element={<Addcar/>} />

      
        {/* user       */}
      <Route path='/uhome' element={<Uhome/>}/>
      <Route path='/cabs' element={<Cabs/>}/>
      <Route path='/bookcab/:id' element={<Bookcab/>}/>
      <Route path='/mybookings' element={<Mybookings/>}/>
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
