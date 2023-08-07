import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [];

   let veganFood = {
      value: "vegan",
      boardName: "veganBoard"
   }

   let thaiFood = {
      value: "thai",
      boardName: "thaiBoard"
   }

   let comfortFood = {
      value: "comfort",
      boardName: "comfortBoard"
   }

   boards.unshift(veganFood, thaiFood, comfortFood);

   const [boardName, setName] = useState('no boards yet!');

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((item) =>
            <option value={item.value}>{item.boardName}</option>
            )}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}