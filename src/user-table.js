import React, { Component } from 'react';
import {propertyData, visibleColumns} from './data/propertyData';
import DataTableHead from './generic-table/dataTableHead';
import DataTableBody from './generic-table/dataTableBody';
import './userTable.css';

export default class UserTable extends Component {
    render() {
        return(
            <table className={'user-table'}>
                <DataTableHead cols={visibleColumns} />
                <DataTableBody data={propertyData} />
            </table>
        );
    }
}