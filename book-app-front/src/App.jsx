import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import HelloWorld from './HelloWorld'
import SayHi from './SayHi'

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hello" element={<HelloWorld/>}/>
      <Route path="/hi" element={<SayHi/>}/>
    </Routes>
    </>
  )
}

export default App
