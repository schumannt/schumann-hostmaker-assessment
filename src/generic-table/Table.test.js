import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import DataTableHead from './dataTableHead';
import DataTableBody from './dataTableBody';

import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('Table Header', () => {
    let output;
    let props;
    beforeEach(() => {
        props = {
            cols: [
                'Owner',
                'Address',
                'Income Generated'
            ]
        };
        output = shallow(<DataTableHead {...props}/>);
    });

    it('should render Table Header', () => {
        expect(output.length).toBe(1);
    });

    it('should render Table <thead/>)', () => {
        expect(output.find('.data-table--header').length).toBe(1);
    });

});

describe('Table Body', () => {
    let output;
    let props;


    beforeEach(() => {
        props = {
           data: [
               {
                   'owner': 'carlos',
                   'address': {
                       'line1': 'Flat 5',
                       'line4': '7 Westbourne Terrace',
                       'postCode': 'W2 3UL',
                       'city': 'London',
                       'country': 'U.K.'
                   },
                   'airbnbId': 3512500,
                   'numberOfBedrooms': 1,
                   'numberOfBathrooms': 1,
                   'incomeGenerated': 2000.34
               },
               {
                   'owner': 'ankur',
                   'address': {
                       'line1': '4',
                       'line2': 'Tower Mansions',
                       'line3': 'Off Station road',
                       'line4': '86-87 Grange Road',
                       'postCode': 'SE1 3BW',
                       'city': 'London',
                       'country': 'U.K.'
                   },
                   'airbnbId': 1334159,
                   'numberOfBedrooms': 3,
                   'numberOfBathrooms': 1,
                   'incomeGenerated': 10000
               },
               {
                   'owner': 'elaine',
                   'address': {
                       'line1': '4',
                       'line2': '332b',
                       'line4': 'Goswell Road',
                       'postCode': 'EC1V 7LQ',
                       'city': 'London',
                       'country': 'U.K.'
                   },
                   'airbnbId': 12220057,
                   'numberOfBedrooms': 2,
                   'numberOfBathrooms': 2,
                   'incomeGenerated': 1200
               }
           ]
        };
        output = shallow(<DataTableBody {...props}/>);
        output.setState(props);
    });

    it('should render Table Body', () => {
        expect(output.length).toBe(1);
    });

    it('should render Table <tbody/>)', () => {
        expect(output.find('.data-table--body').length).toBe(1);
    });

});