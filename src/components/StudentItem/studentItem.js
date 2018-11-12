import React from 'react'
import {Link} from 'react-router-dom'

const studentItem = (props) => {
    return (

            <tr className="StudentItem">
                <td>
                    {props.item.firstName}
                </td>
                <td>
                    {props.item.lastName}
                </td>
                <td>
                    <button onClick={props.onClick}>
                        Edit
                    </button>
                </td>
            </tr>

    );
}

export default studentItem;