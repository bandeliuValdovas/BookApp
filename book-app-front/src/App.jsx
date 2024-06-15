import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

import SayHi from "./SayHi";
import Login from "./components/Login";
import Secret from "./Secret";
import LoginComponent from "./testing/LoginComponent";

import LoginComponent2 from "./authentication/LoginComponent2";
import Test from "./authentication/Test";

function App() {
  return (
    <>
      <Routes>
        <Route path="/l" element={<LoginComponent />} />
        <Route path="/l2" element={<LoginComponent2 />} />
        <Route path="/test" element={<Test />} />
        {/* <Route path="/p" element={<ProtectedComponent />} /> */}

        <Route path="/secret" element={<Secret />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />

        <Route path="/hi" element={<SayHi />} />
      </Routes>
    </>
  );
}

export default App;
