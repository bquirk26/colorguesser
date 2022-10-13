import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const generateHex = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }

  const [options, setOptions] = useState([generateHex(), generateHex(), generateHex(), generateHex()])
  const [color, setColor] = useState(options[Math.floor(Math.random() * 4)]);
  const [score, setScore] = useState(0);
  console.log(color);

  const update = () => {
    let x = [generateHex(), generateHex(), generateHex(), generateHex()]
    setOptions(x);
    let n = x[Math.floor(Math.random() * 4)];
    setColor(n);
  }

  const checkAnswer = (answer) => {
      if (answer === color) {
        setScore(score + 1);
      }
      update();
  }




  //@source https://css-tricks.com/snippets/javascript/random-hex-color/


  return (
    <div id = "main">
      <div id = "viewer">
        <h2>score: {score}</h2>
        <div id = "view" style = {{"backgroundColor": `${color}`}}></div>
        <div id = "options">
          {options.map(val => <button key = {val} onClick = {() => checkAnswer(val)}>{val}</button>)}
        </div>
      </div>

    </div>
  );
}

export default App;
