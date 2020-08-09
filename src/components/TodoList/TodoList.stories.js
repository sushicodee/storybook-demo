import React from "react";
import { storiesOf, action } from "@storybook/react";
import TodoList from "./TodoList";

const defaultProps = {
  todos: [],
  handleDelete: () => action("delete todo"),
  handleChecked: () => action("handle checked"),
};

const populatedTodos = [
  {
    date: 1596739838778,
    id: 24,
    isChecked: true,
    title: "Cook Breakfast",
  },
  {
    date: 1596742718985,
    id: 74,
    isChecked: false,
    title: "Make Dinner",
  },
]

storiesOf("TodoList", module)
  .add("default", () => <TodoList {...defaultProps} />)
  .add("populatedTodos", () => (
    <TodoList
      todos={populatedTodos}
      handleChecked={() =>action("checkTodo")}
      handleDelete={() =>action("handleDeleteTodo")}
    />
  ));
