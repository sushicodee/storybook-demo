import React from "react";
import { storiesOf ,action} from "@storybook/react";
import Button from "./Button";

const defaultProps = {
    label :"create",
    handleSubmit:() => action('handleSubmit'),
    input:''
}

const populatedInputProps = {
    label :"create",
    handleSubmit:() =>action('handleSubmit'),
    input:"Buy Milk"
}

storiesOf("TodoButton",module)
.add("default", () => <Button {...defaultProps}/>)
.add("whenInput", () => <Button {...populatedInputProps}/>)