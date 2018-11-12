import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import {listStudents} from '../../repository/studentRepository'
import StudentsList from "../StudentsList/StudentsList";
import EditStudentDetails from '../EditStudentDetails/EditStudentDetails'
import AddNewStudent from "../AddNewStudent/AddNewStudent";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            students: listStudents()
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){

    }

    onAddNewStudent = (student, e) => {
        this.setState( state => {
            return {students:[...state.students, student]};
        });
    }


    render() {
        return (
            <div className="App">
                <AddNewStudent onNewStudent={this.onAddNewStudent()}/>
                <StudentsList students={this.state.students} handleClick={this.handleClick}/>
            </div>
        );
    }
}

export default App;
