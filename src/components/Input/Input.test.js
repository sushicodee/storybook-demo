import Input from './Input';
import ReactDom from 'react-dom';
import React from 'react';

it('renders input without crashing', () => {
    const div = document.createElement('div')
    ReactDom.render(<Input/> , div);
})