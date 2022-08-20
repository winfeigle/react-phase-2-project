import React from "react";

function GoalItem({ goal }) {
    const {id, name, progress} = goal;


    const handleChange = () => {
        console.log(`Updating progress... Goal #${id}`)
    }

    const handleDelete = () => {
        console.log(`deleting... Goal #${id}`)
    }

    return(
        <div className="goal-card">
            <button onClick={handleDelete} className="delete-button">✕</button>
            <p><b className="label">Goal:</b> {name}</p>
            <p><b className="label">Progress:</b> {progress}%</p>
            <input onChange={handleChange} className="progress-slider" type="range" min="1" max="100" value={progress} id="myRange" />
        </div>
    );
};

export default GoalItem;