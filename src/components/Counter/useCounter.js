import {useState} from 'react';

function useCounter({initialCount = 0,step = 1} = {}) {
    const [count, setcount] = useState(initialCount)
    const increment = () => setcount(c => c + step)
    const decrement = () => setcount(c => c - step)
    return {count,increment,decrement}
}
export default useCounter;