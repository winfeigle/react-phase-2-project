import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Goals from "./components/Goals";
import Accomplishments from "./components/Accomplishments";
import Form from "./components/Form";

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

  const onUpdateGoal = (updatedGoal) => {
    const updatedGoals = goals.map(originalGoal => {
      if(originalGoal.id === updatedGoal.id){
        return updatedGoal;
      } else{
        return originalGoal;
      }
    });
    console.log(updatedGoals);
  }

  const onFormSubmit = (newData, type) => {
    console.log(newData, type)
  }

  return (
    <div>
      <NavBar />
      <Form onFormSubmit={onFormSubmit}/>
      <Switch>
        <Route path="/goals">
          <Goals goals={goals} onUpdateGoal={onUpdateGoal}/>
        </Route>
        <Route path="/accomplishments">
          <Accomplishments accomplishments={accomplishments}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
