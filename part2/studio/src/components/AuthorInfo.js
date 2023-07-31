import "./styling.css";
import recipedata from "./recipe.json";

function AuthorInfo() {
    const recipeAuthor = recipedata.map((data) => (
      <div key={data.name}>{data.author}</div>
    ));

    const recipeAuthorImage = recipedata.map((data) => (
      <div key={data.name}>
         <img src={data.authorImage} alt={data.author} className="authorImage" />
      </div>
    ));

    const recipeWebsite = recipedata.map((data) => (
      <div key={data.name}>
        <a href={data.website} />
      </div>
    ));

    return (
      <div>
         {recipeAuthorImage}
         {recipeAuthor}
         {recipeWebsite}
      </div>
   );


  }
 
 export default AuthorInfo;