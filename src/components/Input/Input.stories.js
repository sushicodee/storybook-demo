import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input";

export default { title: "Input" };

const defaultProps = {
  label: "Enter Todo...",
  input: "",
  setinput: () => {},
};

const populatedProps = {
  label: "Enter Todo...",
  input: "Cook Breakfast",
  setinput: () => {},
};

storiesOf("FormInput", module)
  .add("default", () => (
    <div className="todo-container">
      <div className="todo-maker">
        <Input {...defaultProps} />
      </div>
    </div>
  ))
  .add("populated", () =>  <div className="todo-container">
  <div className="todo-maker">
    <Input {...populatedProps} />
  </div>
</div>)
