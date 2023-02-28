import React from "react";
import MainPage from "./components/MainPage";
import { BrowserRouter } from "react-router-dom";
import LogInAndSignUp from "./components/LogInAndSignUp";
import { useSelector } from "react-redux";

function App() {
  const signIn = useSelector(state => state.LogIncondition)

  return (
    <div className="bg-[#081D54]">
      <BrowserRouter>
        {signIn ? <MainPage /> : <LogInAndSignUp />}
      </BrowserRouter>
    </div>
  );
}

export default App;
