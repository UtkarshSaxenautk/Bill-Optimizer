import { render } from "react-dom";
import './style.css'
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
//import SelectAppliances from "./components/SelectAppliances";
import ShowAppliances from "./components/ShowAppliances";
import Type from "./components/Type";
import { useState } from "react";
import { JwtContext } from "./JwtContext";
import SignIn from "./login";
import SignUp from "./Signup";
//import ShowAppliances from "./components/ShowAppliances";


const App = () => {
  const [jwt, setJwt] = useState('');
  return (
    <StrictMode>
      
        <BrowserRouter>
          <JwtContext.Provider value={{ jwt, setJwt }}>
          <Routes>
            {/* <Route path="/details/:id" element={<Details />} /> */}
            <Route path="/" element={<Home />} />
            <Route path={"/selectappliances"} element={<ShowAppliances />} />
            <Route path={"/type"} element={<Type />} />
            <Route path={"/show"} element={<ShowAppliances />} />
            <Route path={"/login"} element={<SignIn />} />
            <Route path={"/signup"} element={<SignUp />} />
          </Routes>
          </JwtContext.Provider>
        </BrowserRouter>
  
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));