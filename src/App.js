// import logo from './logo.svg'
import './App.css';
import AdminRouter from './Admin/Router/AdminRouter';
import UserRouter from './User/Router/UserRouter';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>

        <Route path='/admin/*' element={<AdminRouter/>}/>
        <Route path='/*' element={<UserRouter/>}/>

 
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
