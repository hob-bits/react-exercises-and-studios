const RecipeAuthor = () => {
   let authorLink = "https://www.kathysvegankitchen.com/vegan-pad-kee-mao/";
   let authorPhoto = "https://www.kathysvegankitchen.com/wp-content/uploads/2022/07/Kathys-Vegan-Kitchen-Avatar-min-360x335.jpeg";
   let authorName = "Kathy Carmichael";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["rice vinegar", "vegetable broth", "liquid aminos or soy sauce", "brown sugar or maple syrup", "Thai red chili", "Sriracha"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.kathysvegankitchen.com/wp-content/uploads/2022/10/vegan-drunken-noodles-copy.jpg" alt="vegan drunken noodles" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}