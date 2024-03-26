import React, { useState } from "react";
import "./App.css";
import JobForm from "./component/JobForm/JobForm";
import JobList from "./component/JobList/JobList";
import MenuBar from "./component/menuBar/MenuBar";

function App() {
  const [showAbrv, setShowAbrv] = useState(false);

  return (
    <div className="mx-auto max-w-[300px] sm:max-w-[600px] md:max-w-[1100px]">
      <MenuBar />
      <h1 className="p-5 text-14px] md:text-[16px]">
        Job Scheduling and Optimization System
      </h1>
      <JobForm />
      <JobList />
    </div>
  );
}

export default App;
