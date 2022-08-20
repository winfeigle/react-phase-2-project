import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Goals from "./components/Goals";
import Accomplishments from "./components/Accomplishments";

function App() {
  const [goals, setGoals] = useState([]);
  const [accomplishments, setAccomplishments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/goals`)
      .then(res => res.json())
      .then(setGoals);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8000/accomplishments`)
      .then(res => res.json())
      .then(setAccomplishments);
  }, []);


  return (
    <div>
      <Header />
      <Goals goals={goals}/>
      <Accomplishments accomplishments={accomplishments}/>
    </div>
  );
}

export default App;
