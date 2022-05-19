import React, { useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';

// interface Props {
//   altText: string;
// }

//Zbudowac licznik, ktory sie sklada z 2 przyciskow "+" oraz "-".
//Licznik na poczatku wyswietla wartosc 0
//Po wcisnieciu "+" inkrementuje wartosc co 4
//Po wcisnieciu "-" dekrementuje wartosc co 2
//Dodatkowy przycisk "reset" powoduje powrot do wartosci 0

//Wymysl swoj komponent, ktry robi cos z uzyciem hookow

const Counter = () => {
  const [Value, setValue] = React.useState(0);

  return (
    <div>
      {Value}
      <br></br>
      <button onClick={() => setValue(Value + 4) }>+</button>
      <button onClick={() => setValue(Value - 2) }>-</button>
      <button onClick={() => setValue(0)}>Reset</button>
    </div>
  )
}

const ColorBox = () => {
    const [color, setColor] = React.useState("Red");
    const [bgColor, setBgColor] = React.useState("Black");
    const style = {color : color, background:bgColor};

    return(
      <div style={style}>
        <label>Choose a font color: </label>
          <select id="optionA">
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Yellow">Yellow</option>
            <option value="White">White</option>
            <option value="Black">Black</option>
          </select>
        <br></br>
        <label>Choose a background color: </label>
          <select id="optionB">
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Yellow">Yellow</option>
            <option value="White">White</option>
            <option value="Black">Black</option>
          </select>
          <br></br>
          <button onClick={ () => { 
            const inputA = document.getElementById('optionA') as HTMLInputElement;
            const inputB = document.getElementById('optionB') as HTMLInputElement;
            if(inputA?.value != null && inputB?.value != null){
              if(inputA?.value != inputB?.value){
                const valueA = inputA?.value;
                const valueB = inputB?.value;
                setColor(valueA);
                setBgColor(valueB);
              }
              else{
                alert('Colors need to be different!');
              }
            }
          }
          }>Ok</button>
      </div>
    )
}

const App = () =>
  <div className="App">
      <header className="App-header">
      <Counter />
      <ColorBox/>
      </header>
    </div>

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
