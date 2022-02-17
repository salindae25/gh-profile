import { useState } from "react";
import "./App.css";
const envTitle = import.meta.env.VITE_APP_TITLE;
function App() {
  console.log(import.meta.env);

  return (
    <div className="app">
      <div className="app_nav">
        <img
          src={`${import.meta.env.BASE_URL}logo.svg`}
          alt="logo"
          className="app_logo"
        />
        <h2 className="app_title">Salinda's Profile</h2>
      </div>
      <div>{envTitle}</div>
    </div>
  );
}

export default App;
