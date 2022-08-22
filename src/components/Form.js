import React, { useState } from "react";

function Form(){
    const [formType, setFormType] = useState(true)
    const [formData, setFormData] = useState({

    })

    const handleChange = () => {
        setFormType(!formType);
    }



    return(
        <section id="form-section">
            <h2>Add a new goal or an accomplishment:</h2>
            <form>
                <select 
                    name="form-type"
                    onChange={handleChange}
                    >
                    <option value="goal">Goal</option>
                    <option value="accomplishment">Accomplishment</option>
                </select>
                <label> 
                    <input 
                        type="text"
                        value=""
                        placeholder="Description"
                        />
                </label>
                { 
                // Ternary operator to determine which kind of form we are completing, based off of the dropdown selection.
                formType ?
                    <label>Progress 
                    <input 
                        type="number"
                        placeholder="0%"
                        value=""
                        />
                    </label> 
                    :
                    <label>Completion Date:
                    <input 
                        type="text"
                        placeholder="Ex. May 2020"
                        value=""
                        />
                    </label>
                }
            </form>
        </section>
    );
}

export default Form;