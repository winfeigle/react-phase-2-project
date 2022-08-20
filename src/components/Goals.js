import React from "react";
import GoalItem from "./GoalItem";

function Goals({ goals }){

    const renderGoals = goals.map(goal => {
        return(
            <GoalItem key={goal.id} goal={goal} />
        )
    })

    return(
        <div id="goals-container">
            {renderGoals}
        </div>
    );
}

export default Goals;