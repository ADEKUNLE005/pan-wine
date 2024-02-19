import React, { createContext, useState ,useReducer, Children} from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { data } from "./landing page/events/Events";
import "./App.css";
import { Outlet, ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ToastContainer />
            <Outlet/>
      <ScrollRestoration />
   
    </div>
  );
}

export default App;
