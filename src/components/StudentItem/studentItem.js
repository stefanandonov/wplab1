import React from 'react'
import {Link} from 'react-router-dom'

class StudentItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: props.firstName,
            lastName: props.lastName,
            index: props.index,
            studyProgramme: props.studyProgramme
        };
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
    }

    changeLastName(lastName) {
        this.setState({
            lastName: lastName
        });
    }

    changeFirstName(firstName) {
        this.setState({
            firstName: firstName
        });
    }

}


export default StudentItem;