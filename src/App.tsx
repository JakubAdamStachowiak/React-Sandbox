
import Counter, {test} from './Counter';
import ColorBox from './ColorBox';
import Form from './Form';
import './App.css';

test();
// interface Props {
//   altText: string;
// }

//Zbudowac licznik, ktory sie sklada z 2 przyciskow "+" oraz "-".
//Licznik na poczatku wyswietla wartosc 0
//Po wcisnieciu "+" inkrementuje wartosc co 4
//Po wcisnieciu "-" dekrementuje wartosc co 2
//Dodatkowy przycisk "reset" powoduje powrot do wartosci 0

//Wymysl swoj komponent, ktry robi cos z uzyciem hookow


//Zbuduj formularz, z 3 pól (Imie, Nazwisko, Username[walidacja, wymagany, max 8 znaków])
//komunikat walidacyjny dla pola username
//Przycisk Submit
//Wyswietlone dane z formularza

const App = () =>
  <div className="App">
      <header className="App-header">
        <Counter />
        <ColorBox/>
        <Form/>
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
