import React from 'react'

export default class AddNewStudent extends React.Component {

    constructor(props) {
        super(props);
        handleChange=this.handleChange.bind(this)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('onFormSubmit', event);

        this.props.onAddNewStudent(
            {
                firstName:event.target.value,
                lastName:event.target.value,
                index:event.target.value,
                studyProgramme:event.target.value
            }
        );

    }

    handleChange(event) {
        this.state[event.target.name] = event.target.value;
    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <label>First name</label>
                    <input type="text" name="firstName" onChange={this.handleChange}/>
                    <label>Last name</label>
                    <input type="text" name="lastName" onChange={this.handleChange}/>
                    <label>Index</label>
                    <input type="text" name="index" onChange={this.handleChange}/>
                    <label>Study programme</label>
                    <input type="text" name="studyProgramme" onChange={this.handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>);
    }
}

