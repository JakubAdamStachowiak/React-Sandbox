import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextField from '../../TextField';

export default {
    title: 'TextField',
    component: TextField,
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> =(args) => <TextField 
    fieldLabel={'Label'} 
    id={'id'} 
    error={{
        type: undefined,
        message: undefined
    }} 
    className={'className'}/>;

export const Main = Template.bind({});

Main.args = {

};