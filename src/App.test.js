import React from 'react';
import App from './App';
import Table from './user-table';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
    let output;

    beforeEach(() => {
        output = shallow(<App/>);
    });

    it('should render App', () => {
        expect(output.length).toBe(1);
    });

    it('should render App Logo', () => {
        expect(output.find('.App-logo').length).toBe(1);
    });

    it('should render App Content', () => {
        expect(output.find('.App-content').length).toBe(1);
    });

    it('should render Table', () => {
        expect(output.find(Table).length).toBe(1);
    });
});