import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ColorBox from '../../ColorBox';

export default {
    title: 'ColorBox',
    component: ColorBox,
} as ComponentMeta<typeof ColorBox>;

const Template: ComponentStory<typeof ColorBox> =(args) => <ColorBox/>;

export const Main = Template.bind({});

Main.args = {

};