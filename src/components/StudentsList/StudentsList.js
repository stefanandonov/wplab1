import React from 'react';
//import ListStudent from './../repository/studentRepository'
import StudentItem from '../StudentItem/studentItem'
import {editStudent} from '../App/App'

export default class StudentsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            paging: {
                currentPage: 1,
                itemsPerPage: 10,

            }
        }
    }

    changePage = (e) => {
        const pageNumber = Number(e.target.id)
        this.setState( (state) => {
            const paging = state.paging;
            paging.currentPage=pageNumber;
            return {'paging':paging};

        });
    }




    render() {
        const paging = this.state.paging;
        const indexOfLast = paging.currentPage * paging.itemsPerPage;
        const indexOfFirst = indexOfLast - paging.itemsPerPage;
        const items = this.props.items.slice(indexOfFirst, indexOfLast);
        const numberOfPages = Math.ceil(this.props.items.length / paging.itemsPerPage);
        const pageNumbers = [];

        const listItems = items.map( (item, index) => {
            return (
                <StudentItem  editStudent={this.props.editStudent} key={index} item={item}  indeks={item.indeks} smer={item.smer}/>
            );
        });
        const pages = pageNumbers.map(number=> {
            return (
                <li onClick={this.changePage} key={number} id={number}>
                    {number}
                    </li>
            )
        });

        return (
            <div>
            <table>
                <thead>
                <tr>
                    <th>Ime</th>
                    <th>Prezime</th>
                    <th>Izmeni</th>
                </tr>
                </thead>
                <tbody>
                {listItems}
                </tbody>
                <ul className="paging">
                    {pages}
                </ul>
            </table>
            </div>
        );





    }
}