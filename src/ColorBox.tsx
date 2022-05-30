import {useState} from 'react'

export const ColorBox = () => {
    const [color, setColor] = useState("Red");
    const [bgColor, setBgColor] = useState("Black");
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