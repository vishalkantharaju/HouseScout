import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Login from './Login.tsx'
import Ambulance from './ambulance.tsx'
import Hospital from './hospital.tsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Toaster} from './components/ui/toaster.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
        {/* <NavBar/> */}
        <Routes>
          <Route path="/" Component={App} />
          <Route path="/login" Component={Login} />
          <Route path="/ambulance" Component={Ambulance} />
          <Route path="/hospital" Component={Hospital} />
        </Routes>
        <Toaster/>
    </Router>
  </React.StrictMode>,
)
