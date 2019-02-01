import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import { ZipCodeBrowser } from '../../src/components/ZipCodeBrowser/ZipCodeBrowser';
import { initialState } from '../../src/components/state/reducers/FetchZipCodesReducer';

const mockStore = configureStore();
let store = null;

describe('<ZipCodeBrowser />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            store = mockStore(initialState);
            const wrapper = shallow(<ZipCodeBrowser store={store} />);
            const component = wrapper.dive();

            expect(toJson(component)).toMatchSnapshot();
        })
    })
})