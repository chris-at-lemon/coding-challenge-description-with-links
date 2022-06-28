/* @noflow */
import React from 'react';
import DescriptionWithLinks from '../descriptionWithLinks';
import {shallow} from 'enzyme';

describe('<DescriptionWithLinks />', () => {
    it('should display the description', () => {
        const wrapper = shallow(<DescriptionWithLinks description="My test description" links={[]} />);
        expect(wrapper.text()).toEqual("My test description");
    });
});
