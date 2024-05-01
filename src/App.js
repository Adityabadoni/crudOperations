
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Register from './Component/Register';
import Login from './Component/Login';
import Course from'./Component/Course';
import Calculator from './Component/Calculator';
import Student from './Component/Student';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Component/Nav';
import Employee from './Component/Employment';
import Ft1 from './Component/Ft1';
import Convert from './Component/Convert';
import AddData from './Component/AddData';
import CountryDemo from './Component/Country/Country';
import Record from './Component/Crud/Record';
import AddRecord from './Component/Crud/AddRecord';

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import Todo from './Component/Todo/Todo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

        
function App({pageProps}) {
  
  
  return (
    <div>
   <ToastContainer 
   position="top-left"
   autoClose={2000}
   hideProgressBar={false}
   newestOnTop={false}
   closeOnClick
   rtl={false}
   pauseOnFocusLoss
   draggable
   pauseOnHover
   theme="light"
   />
      <BrowserRouter>
      <Nav/>

      <PrimeReactProvider>
      <Routes {...pageProps}>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='course' element={<Course/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='calc' element={<Calculator/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/todo' element={<Todo/>}/>

        <Route path="/addData/:id" element={<AddData />} />
        <Route path="/country" element={<CountryDemo />} />
        <Route path="/record" element={<Record />} />
        <Route path="/record/addRecord/:id" element={<AddRecord />} />




        <Route path='emp' element={<Employee/>}/>    
        <Route path='ft1' element={<Ft1/>}/>  
        <Route path='convert' element={<Convert/>}/>
        </Routes>
      </PrimeReactProvider>
      </BrowserRouter>
</div>
  );
}

export default App;
