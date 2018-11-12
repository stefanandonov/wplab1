import React from 'react'

export default class EditStudentDetails extends React.Component {

    constructor(props){
        super(props);
        this.state={
            index: props.index,
            student: props.student

        }
    }

    handleChange = this.handleChange.bind(this);
    handleSubmit = this.handleSubmit.bind(this);

    handleChange(event){
        const newStudent = this.state.student;
        newStudent[event.target.name] = event.target.value;
        this.setState({
            student: newStudent
        });
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.handleChangedStudent(this.state);
        this.setState({redirectTo:"/"});
    }






    render() {
        if (this.state.student != null){
        return (
            <form onSubmit={this.handleSubmit}>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            Ime:
                        </td>
                        <td>
                            <input type="text" name="firstName" value={this.state.student.firstName } onChange={this.handleChange}/>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            Prezime:
                        </td>
                        <td>
                            <input type="text" name="lastName" value={this.state.student.lastName } onChange={this.handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Index:
                        </td>
                        <td>
                            <input type="text" name="indeks" value={this.state.student.indeks }onChange={this.handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Smer:
                        </td>
                        <td>
                            <input type="text" name="smer" value={this.state.student.smer } onChange={this.handleChange}/>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" value="Submit"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        );}
        else return null;
    }
}