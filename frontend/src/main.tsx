import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Login from './Login.tsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
        {/* <NavBar/> */}
        <Routes>
          <Route path="/" Component={App} />
          <Route path="/login" Component={Login} />
        </Routes>
    </Router>
  </React.StrictMode>,
)
