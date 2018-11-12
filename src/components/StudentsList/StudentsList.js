import React from 'react';
//import ListStudent from './../repository/studentRepository'
import StudentItem from '../StudentItem/studentItem'
import EditStudentDetails from '../EditStudentDetails/EditStudentDetails'

export default class StudentsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: props.students,
            editForm: null,
            clickedIndex: null
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(event) {
        let id = event.target.getAttribute('id');
        this.setState({
            clickedIndex: id
        });
        let student = this.state.students[id];
        this.setState({
            editForm: <EditStudentDetails
                onSubmit={this.handleSubmit}
                firstName={student.firstName}
                lastName={student.lastName}
                index={student.index}
                studyProgramme={student.studyProgramme}/>
        });
    }

    handleSubmit(student) {
        let newStudents = this.state.students;
        newStudents[this.state.clickedIndex] = student;
        this.setState({
            students: newStudents,
            editForm: null,
            clickedIndex: null
        });
    }

    render() {
        let listItems = this.state.students.map((item, index) => {
            return <li key={index} id={index} className="list-group-item">{item.firstName} {item.lastName}</li>
        });
        return (
            <div className="list-group">
                <ul onClick={this.handleClick}>{listItems}</ul>
                {this.state.editForm}
            </div>
        );
    }
}