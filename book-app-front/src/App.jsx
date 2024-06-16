import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./authentication/Test";
import LoginPage from "./pages/LoginPage";
import NavigationBar from "./components/NavigationBar";
import RegistrationPage from "./pages/RegistrationPage";


function App() {
  return (
    <>
    <NavigationBar />
    
      <Routes>  
        <Route path = "/login" element = {<LoginPage/>}/>
        <Route path = "/registration" element = {<RegistrationPage/>}/>

        <Route path="/test" element={<Test />} />
        <Route path="/" element={<Home />} />
  
      </Routes>
    </>
  );
}

export default App;
