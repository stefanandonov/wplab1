import React from 'react';
//import ListStudent from './../repository/studentRepository'
import StudentItem from '../StudentItem/studentItem'
import EditStudentDetails from '../EditStudentDetails/EditStudentDetails'
import ReactPaginate from 'react-paginate';

export default class StudentsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: props.students,
            editForm: null,
            clickedIndex: null,
            pageNum: 0,
            pageSize: 3
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

    getStudentsPage = (offset, nextPageOffset) => {
        return this.state.students
            .map((item, index) => {
                return <li key={index} id={index} className="list-group-item">{item.firstName} {item.lastName}</li>
            }).filter((task, index) => {
                return index >= offset
                    && index < nextPageOffset;
            });
    };

    handlePageClick = (data) => {
        let selected = data.selected;

        console.log('New selected: ', selected);
        this.setState({pageNum: selected});
    };


    render(){
        const offset = this.state.pageNum * this.state.pageSize;
        const nextPageOffset = offset + this.state.pageSize;
        const pageCount = Math.ceil(this.props.students.length / this.state.pageSize);
        const students = this.getStudentsPage(offset, nextPageOffset);

        let listItems = this.state.students.map((item, index) => {
            return <li key={index} id={index} className="list-group-item">{item.firstName} {item.lastName}</li>
        });
        return (
            <div className="list-group">
                <ul onClick={this.handleClick}>{students}</ul>
                {this.state.editForm}

                <ReactPaginate previousLabel={"previous"}
                               nextLabel={"next"}
                               breakLabel={<a href="#">...</a>}
                               breakClassName={"break-me"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination"}
                               subContainerClassName={"pages pagination"}
                               activeClassName={"active"}/>


            </div>
        );
    }
}