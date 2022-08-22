import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Goals from "./components/Goals";
import Accomplishments from "./components/Accomplishments";
import Home from "./components/Home";
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
      type === 'goals' ? setGoals(goals => [...goals, newData]) : setAccomplishments(accomplishments => [...accomplishments, newData])
  }

  const onDeleteClick = (id, type) => {
    fetch(`http://localhost:8000/${type}/${id}`, {
      method: 'DELETE'
    })
    
    //Use filter to setGoal or setAccomplishments with new items
      if(type === 'goals'){
        setGoals(ogGoals => ogGoals.filter(ogGoal => {
          return ogGoal.id === id ? null : ogGoal;
        }))
      } else{
        setAccomplishments(ogAccomplishments => ogAccomplishments.filter(ogAccomplishment => {
          return ogAccomplishment.id === id ? null : ogAccomplishment;
        }))
      }
  }

  return (
    <div>
      <NavBar />
      <Form onFormSubmit={onFormSubmit}/>
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/goals">
          <Goals goals={goals} onUpdateGoal={onUpdateGoal} onDeleteClick={onDeleteClick}/>
        </Route>
        <Route path="/accomplishments">
          <Accomplishments accomplishments={accomplishments} onDeleteClick={onDeleteClick}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
