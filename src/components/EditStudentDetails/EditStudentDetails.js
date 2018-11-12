import React from 'react'

export default function EditStudentDetails(props) {
    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit(state);
    };

    const state = {
        firstName: props.firstName,
        lastName: props.lastName,
        index: props.index,
        studyProgramme: props.studyProgramme
    };

    function handleChange(event) {
        state[event.target.name] = event.target.value;
    }

    return (
        <div>
            <p>Edit student form</p>
            <form onSubmit={handleSubmit}>
                <label>First name</label>
                <input type="text" name="firstName" defaultValue={state.firstName} onChange={handleChange}/>
                <label>Last name</label>
                <input type="text" name="lastName" defaultValue={state.lastName} onChange={handleChange}/>
                <label>Index</label>
                <input type="text" name="index" defaultValue={state.index} onChange={handleChange}/>
                <label>Study programme</label>
                <input type="text" name="studyProgramme" defaultValue={state.studyProgramme} onChange={handleChange}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}