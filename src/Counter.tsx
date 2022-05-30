import { useState } from 'react';
import styled from 'styled-components';


interface Props {

}

const Reset = styled.button`
    background-color: #ff0000;
`;

const Increment = styled.button`
    background-color: #00ff00;
`;

const Decrement = styled.button`
    background-color: #0000ff;
`;
const CounterValue = styled.div`
    font-size: 20px;
    margin-bottom: 20px;
`;

const map = { };

export const test = () => {
    console.log('test');
}

export default () => {
    const [Value, setValue] = useState(0);
    
    return (
      <div>
        <CounterValue>{Value}</CounterValue>
        <Increment onClick={() => setValue(Value + 4) }>+</Increment>
        <Decrement onClick={() => setValue(Value - 2) }>-</Decrement>
        <Reset onClick={() => setValue(0)}>Reset</Reset>
      </div>
    )
  }
