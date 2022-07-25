import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Form from '../../Form';

export default {
    title: 'Form',
    component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> =(args) => <Form/>;

export const Main = Template.bind({});

Main.args = {

};