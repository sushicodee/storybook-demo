import React from 'react';
import {storiesOf,action} from '@storybook/react';
import Todo from './Todo';

const defaultProps = {
    id:1,
    title:'Make Coffee',
    isChecked:false,
    handleDelete :() => action('delete todo'),
    handleChecked:() => action('handle checked'),
}

const completedProps = {
    id:1,
    title:'Make Coffee',
    isChecked:true,
    handleDelete :() => action('delete todo'),
    handleChecked:() => action('handle checked'),
}

storiesOf('TodoItem',module)
.add('default', () => <Todo {...defaultProps}/>)
.add('completedTodo', () => <Todo {...completedProps} />)

