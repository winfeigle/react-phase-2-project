import React, {useState} from "react";

function GoalItem({ goal, onUpdateGoal, onDeleteClick }) {
    const {id, name, progress} = goal;
    const [progressBar, setProgressBar] = useState(progress);


    const handleChange = (e) => {
        setProgressBar(parseInt(e.target.value))
        fetch(`http://localhost:8000/goals/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({progress: progressBar})
        })
            .then(res => res.json())
            .then((updatedGoal) => {
                onUpdateGoal(updatedGoal)
            })
    }

    const handleDelete = () => {
        let type = "goals";
        onDeleteClick(id, type)
    }

    return(
        <div className="card">
            <button onClick={handleDelete} className="delete-button">✕</button>
            <p><b className="label">Goal:</b> {name}</p>
            <p><b className="label">Progress:</b> {progressBar}%</p>
            <input onChange={handleChange} className="progress-slider" type="range" min="0" max="100" value={progressBar} step="10" id="myRange" name={progress}/>
        </div>
    );
};

export default GoalItem;