import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import {listStudents} from '../../repository/studentRepository'
import StudentsList from "../StudentsList/StudentsList";
import EditStudentDetails from '../EditStudentDetails/EditStudentDetails'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            students: listStudents()
        };
    }

    render() {
        return (
            <div className="App">
                <StudentsList students={this.state.students}/>
            </div>
        );
    }
}

export default App;
