import React, {Component} from "react";
import classnames from 'classnames';
import fetch from 'node-fetch';
import './dataTable.css';
import { maxDistance, apiKey, centralLocation, countryCurrency } from '../constants/common';


export default class DataTableBody extends Component {
    constructor() {
        super();
        this.state = {
            filteredData: []
        };
    }

    componentDidMount() {
        this.props.data.map(lineItem => {
            const apiCall =
                `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${centralLocation}&destinations=${lineItem.address.postCode.replace(/\s/g, '')}&key=${apiKey}`;
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            fetch(proxyUrl + apiCall)
                .then(res => res.json())
                .then(json => {
                    if(json.rows[0].elements[0].distance.value < maxDistance) {
                        const newFilteredData = this.state.filteredData.slice();
                        newFilteredData.push(lineItem);
                        this.setState({ filteredData: newFilteredData})
                    }
                })
        })
    }

    jsUcfirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Convert to Array and print value (array entry [1])
    formatAddress(address) {
        return Object.entries(address).map((line, index) => (
            <p key={`Address-Line-${index}`} className={'data-table--row--address'}>
                {this.jsUcfirst(line[1])}
            </p>
        ));
    }

    render() {
        console.log(JSON.stringify(this.state,null,2));
        return(
            <tbody className={"data-table--body"}>
                {this.state.filteredData.map((lineItem, index) => {
                    const incomeFig =
                        lineItem.incomeGenerated && lineItem.incomeGenerated.toFixed(2);
                    const income = `${countryCurrency}${incomeFig}`;
                    return (
                        <tr
                        className={classnames('data-table--row', {
                            'data-table--row__alter': index % 2
                        })}
                        key={`${index}-${lineItem.owner}`}
                        >
                            <td className={'data-table--row--name'}>{this.jsUcfirst(lineItem.owner)}</td>
                            <td className={'data-table--row--address'}>{this.formatAddress(lineItem.address)}</td>
                            <td className={'data-table--row--income'}>{income}</td>
                        </tr>
                    )


                })}
            </tbody>
        );
    }
}