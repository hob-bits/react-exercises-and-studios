export default function BookList() {
   let pageTitle = "Summer Reading List";
   let book1 = "https://m.media-amazon.com/images/I/51LE-uEAZ9L._SY445_SX342_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/51-rLlDOGpL._SY445_SX342_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/51QuzhN2lTL._SY445_SX342_.jpg";
   let book4 = "https://m.media-amazon.com/images/I/41iTM8LkxSL._SY445_SX342_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Lord of the Flies" />
         <img src={book2} alt="The Secret Life of Bees" />
         <img src={book3} alt="Purple Hibiscus" />
         <img src={book4} alt="Educated" />
      </div>      
   );
}