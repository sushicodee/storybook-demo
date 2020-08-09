import Button from './../Button';
import ReactDom from 'react-dom';
import React from 'react';
import {render,cleanUp} from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom'

// afterEach(cleanUp);

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDom.render(<Button/> , div);
})

it('renders button correctly', () => {
    const props = {
        label:"Clear Todos"
    }
     const {getByTestId} = render(<Button label = {props.label}/>)
     expect(getByTestId('button'))
     .toHaveTextContent(props.label);
})

it('renders button correctly', () => {
    const props = {
        label:"create"
    }
     const {getByTestId} = render(<Button label = {props.label}/>)
     expect(getByTestId('button'))
     .toHaveTextContent(props.label);
})

// it('mock implementation of basic function', () => {
//     const mock = jest.fn(() => 'i am a mock function');
//     expect(mock('Calling my mock function').toBe('i am a mock function'));
//     expect(mock).toHaveBeenCalledWith('Calling my mock function');
// })

it('matches snapshot' , () => {
    const props = {
        label:'create Todo'
    }
    const tree = renderer.create(<Button label = {props.label}/>).toJSON();
    expect(tree).toMatchSnapshot();
})