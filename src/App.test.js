import React from 'react';
import {render ,fireEvent} from '@testing-library/react';
import App from './App';

test('it renders input correctly' , () => {
    // const component = shallow(<Input/>);
    const {getByTestId ,getByText} = render(<App/>)
    const input = getByTestId('input');
    const button = getByText('Create');
    fireEvent.change(input, {target: { value:"buy Cake"}})
    fireEvent.click(button);
    getByText('buy Cake');
})

