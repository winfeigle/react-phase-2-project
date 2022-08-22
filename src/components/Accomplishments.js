import React from "react";
import AccomplishmentItem from "./AccomplishmentItem";

function Accomplishments({ accomplishments, onDeleteClick }){

    const renderAccomplishments = accomplishments.map(accomplishment => {
        return(
            <AccomplishmentItem 
                key={accomplishment.id} 
                accomplishment={accomplishment}
                onDeleteClick={onDeleteClick} 
                />
        )
    })


    return(
        <div id="accomplishments-container">
                {renderAccomplishments}
        </div>
    );

}

export default Accomplishments;