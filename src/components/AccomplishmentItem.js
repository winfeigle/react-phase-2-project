import React from "react";

function AccomplishmentItem({ accomplishment }) {
    const {id, name, completed} = accomplishment;

    const handleDelete = () => {
        console.log(`deleting... Accomplishment #${id}`)
    }

    return(
        <div className="card">
            <button onClick={handleDelete} className="delete-button">✕</button>
            <p>{name}</p>
            <p><b className="label">Completed: {completed}</b></p>
        </div>
    );
};

export default AccomplishmentItem;