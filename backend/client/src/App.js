import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer,} from "react-toastify"
import {useState} from "react"
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom" 
import {Sidebaricon} from "./components/Sidebar/sidebar"
import {Sidebar} from './components/Sidebar/sidebar';
import {Dashboard, Errorpage, Favourites, Login, Register, Showpage, Write, ReadingPage} from "./pages/exporter"


function App() {
   
  //Reading info
  const [Reading, setReading] = useState("")

   
   const [update, setUpdatetext] = useState("")
   const [form, setformFields] = useState({
    title: "",
    userpoem: "",
    select__bytype: ""
  })

  return (
    <>
    <Router>
    <Sidebar/>
    <Sidebaricon />
    <Routes>
      <>
      <Route path="/"  element={<Showpage setformFields={setformFields} setUpdatetext={setUpdatetext} setReading={setReading} /> }/>
      <Route path="/Register" element={<Register />}/>
      <Route path="/Login" element={<Login />}/>

      <Route path="/Dashboard" element={<Dashboard setformFields={setformFields} setUpdatetext={setUpdatetext} setReading={setReading}/>}/>
      <Route path="/Reading" element={<ReadingPage Reading={Reading} />} />
     
      <Route path="/write" element={<Write form={form} setformFields={setformFields} update={update}/>}/>
      <Route path="/favourites" element={<Favourites setReading={setReading}/>}/>
      <Route path="*" element={<Errorpage />}/>
      </>
    </Routes>
    </Router>
   <ToastContainer />
   </>
  );
}

export default App;
