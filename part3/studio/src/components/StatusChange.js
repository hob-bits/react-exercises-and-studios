import { useState } from 'react';

export default function StatusChange () {

   const [notes, setNotes] = useState('');

   const [recipeStatus, setRecipeStatus] = useState(false);

   const handleChange = (event) => {
      setNotes(event.target.value);
   }

   const handleSubmit = (event) => {
      setRecipeStatus(event.preventDefault());
      recipeStatus = true;
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>

         <p>My Recipe Notes aren't here!</p>

         <p>I have not tried this recipe!</p>
      </div>
   );
}