import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Read from './components/Read';
import Aboutus from './components/Aboutus';
import Update from './components/Update';
import Contactus from './components/Contactus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route  path="/" element={<Home/>}/> */
        <Route  path="/read" element={<Read/>}/>
        <Route  path="/aboutus" element={<Aboutus/>}/>
        <Route  path="/update" element={<Update/>}/>
        <Route  path="/contactus" element={<Contactus/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
