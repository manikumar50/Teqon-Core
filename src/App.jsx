import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Home from '../src/assets/pages/Home'
import Navbar from './assets/components/Navbar'
import Services from './assets/pages/Services'
import About from './assets/pages/About'
import ContactUs from './assets/pages/ContactUs'
import Footer from './assets/components/Footer'

function App() {
  
  return (
    <>
    <Navbar />
    <div className="container">
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact-us' element={<ContactUs/>}></Route>
    </Routes>
    <Footer/>
    </div>
    
    </>
  )
}

export default App
