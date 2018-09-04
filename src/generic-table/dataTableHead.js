import React, { Component } from 'react';
import './dataTable.css';

export default class DataTableHead extends Component {
    render() {
        return(
            <thead className={'data-table--header'}>
            <tr>
                {this.props.cols.map((i, index) => {
                    return <td key={`${i}-${index}`}>{i}</td>
                })}
            </tr>
            </thead>
        );
    }
}