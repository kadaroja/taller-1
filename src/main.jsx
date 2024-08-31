import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header' 
import Content from './components/Content' 
import Footer from './components/Footer' 
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Content />
    <Footer />
   
  </StrictMode>,
)
