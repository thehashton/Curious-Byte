import React from "react";
import Button from "./Button";

export default {
    title: 'Component/Button',
    component: Button,
};

const Template = (args: {}) => (
    <Button {...args} />
);

const props = {
    regular: () => ({
        className: '',
        color: 'black', 
        bgColor: 'white', 
        skeleton: false
    })
}

export const ButtonStory: any = Template.bind({});
const defaultProps = props.regular();
ButtonStory.storyName = 'Default';
ButtonStory.args = {
    ...defaultProps
};
