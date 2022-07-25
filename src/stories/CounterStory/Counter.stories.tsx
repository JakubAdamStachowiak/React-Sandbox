import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Counter from '../../Counter';

export default {
    title: 'Counter',
    component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> =(args) => <Counter/>;

export const Main = Template.bind({});

Main.args = {

};