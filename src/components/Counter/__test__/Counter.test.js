import React from 'react';
import {unmountComponentAtNode} from 'react-dom';
import {cleanup ,render, act,renderHook, fireEvent} from '@testing-library/react';
import useCounter from './../useCounter';
import Counter from '../Counter';

// let container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

it('increments count by 2 and decrements it by 2 as default', () => {
    const {getByTestId,getByText} = render(<Counter/>)
    fireEvent.click(getByTestId('increment'));
    expect(getByTestId('count').textContent).toBe('2');
    fireEvent.click(getByTestId('decrement'));
    expect(getByTestId('count').textContent).toBe('0');

})

// describe('increment', () => {
//     it('increments count by one', () => {
//         const {result} = renderHook(useCounter)
//         act(() => {
//             result.current.increment()
//         })
//         expect(result.current.count).toBe(1);
//     })
// })
// // const Counter = ({children, ...rest}) => children(useCounter(rest))

// function setup(props) {
//     let returnVal = {}
//     render(<Counter {...props}> 
//     {
//         val => {
//         Object.assign(returnVal,val)
//         return null
//         }
//     }</Counter>)
// }

// // afterEach(cleanup);
// test('useCounter' ,() => {
//     const counterInst = setup();
//     counterInst.increment();
//     console.log(counterInst.count,counterInst.increment,counterInst.decrement);
// })