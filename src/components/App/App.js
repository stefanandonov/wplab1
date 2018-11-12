import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import {listStudents} from '../../repository/studentRepository'
import StudentsList from "../StudentsList/StudentsList";
import EditStudentDetails from '../EditStudentDetails/EditStudentDetails'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            students: listStudents(),
            studentToEdit: null,
            indexToEdit:-1
        }
    }

    editStudent = (index) => {
        this.setState((prevState) => ({
            studentToEdit: prevState.students[index],
            indexToEdit:index
        }));
    };

    handleChangedStudent = (event) =>{
        this.setState({studentToEdit:null, indexToEdit:-1});
        let newStudents = [...this.state.students];
        newStudents[event.index] = event.student;
        this.setState({students:newStudents});
    };

  render() {
    return (
        <div>

        <StudentsList items={this.state.students}/>
        <EditStudentDetails handleChangedStudent={this.handleChangedStudent} student={this.studentToEdit} index={this.indexToEdit}/>

        </div>

    );
  }
}

export default App;
