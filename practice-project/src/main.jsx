import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Password from './Password.jsx'

import LoginPage from './login.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginPage/>

    
  </StrictMode>,
)
