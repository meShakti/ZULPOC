import React from 'react';

export default () => null

import Button from '../components/Button';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

configure({ adapter: new Adapter() });
describe('rendering',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<Button label="Submit" />)
    })
    it('should render a <TouchableOpacity/>', ()=>{
        expect(wrapper.find('TouchableOpacity')).toHaveLength(1);
    })
    it('show render a label',()=>{
        expect(wrapper.find('Text').contains('Submit')).toBe(true);
    })
 }
)



