import React from 'react';
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
      <button onClick={() => setValue(Value + 4) }>+</button>
      <button onClick={() => setValue(Value - 2) }>-</button>
    </div>
  )
}

const App = () =>
  <div className="App">
      <header className="App-header">
      <Counter />
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
