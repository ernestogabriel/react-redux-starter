import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import { ZipCodeBrowser } from '../../src/components/ZipCodeBrowser/ZipCodeBrowser';


describe('<ZipCodeBrowser />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = shallow(<ZipCodeBrowser />);
            const component = wrapper.dive();

            expect(toJson(component)).toMatchSnapshot();
        })
    })
})