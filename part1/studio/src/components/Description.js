import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
    let authorLink = "https://www.wafflesandmochi.org/recipes/cherry-tomato-candy/";
    let authorPhoto = "https://pyxis.nymag.com/v1/imgs/d87/c0d/66b2368217b79caa6f42cc3d48ac6e7f73-26-samin-nosrat-grub-street-diet.rsquare.w700.jpg";
    let authorName = "Samin Nosrat";
    
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Samin Nosrat" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Pass the Love with Waffles + Mochi</a> 
           </div>
        </div>
     );
};

class RecipeDescription extends React.Component {
   render() {
      return(
         <div> 
         <div>
            <h1>Cherry Tomato Candy</h1>
            <p>Have you ever had tomato candy? Yes, tomato candy! It is a wonderful treat and a healthy reminder that the best things come to those who wait.</p>
         </div>
         <RecipeAuthor />
      </div>
      );
   }
};

export default RecipeDescription;