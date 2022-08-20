import React from "react";
import AccomplishmentItem from "./AccomplishmentItem";

function Accomplishments({ accomplishments }){

    const renderAccomplishments = accomplishments.map(accomplishment => {
        return(
            <AccomplishmentItem key={accomplishment.id} accomplishment={accomplishment} />
        )
    })

    return(
        <div id="accomplishments-container">
            {renderAccomplishments}
        </div>
    );

}

export default Accomplishments;