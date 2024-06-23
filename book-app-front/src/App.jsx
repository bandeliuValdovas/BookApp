import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./authentication/Test";
import LoginPage from "./pages/LoginPage";
import NavigationBar from "./components/NavigationBar";
import RegistrationPage from "./pages/RegistrationPage";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";


function App() {
  return (
    <>
    <NavigationBar />
    
      <Routes >  
        <Route path = "/login" element = {<LoginPage/>}/>
        <Route path = "/registration" element = {<RegistrationPage/>}/>
        <Route path = "/books" element = {<Books/>}/>
        <Route path='/book/:id' element={<BookDetails />} />


        <Route path="/test" element={<Test />} />
        <Route path="/" element={<Home />} />
  
      </Routes>
    </>
  );
}

export default App;
