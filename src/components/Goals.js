import React from "react";
import GoalItem from "./GoalItem";

function Goals({ goals, onUpdateGoal, onDeleteClick }){

    const renderGoals = goals.map(goal => {
        return(
            <GoalItem 
                key={goal.id} 
                goal={goal} 
                onUpdateGoal={onUpdateGoal}
                onDeleteClick={onDeleteClick}
                />
        )
    })

    return(
        <div id="goals-container">
            {renderGoals}
        </div>
    );
}

export default Goals;