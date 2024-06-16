import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SayHi from "./SayHi";
import LoginComponent2 from "./authentication/LoginComponent2";
import Test from "./authentication/Test";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <>
      <Routes>  
        <Route path = "login" element = {<LoginPage/>}/>    
      
        <Route path="/l2" element={<LoginComponent2 />} />
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<Home />} />
        <Route path="/hi" element={<SayHi />} />
      </Routes>
    </>
  );
}

export default App;
