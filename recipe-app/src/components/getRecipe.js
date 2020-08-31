import React, { Component, useEffect } from 'react';
import axios from 'axios';

class getRecipe extends Component {
   state = {
      recipies: [],
   };
   componentDidMount() {
      console.log('mounted');
      this.recipes();
   }
   recipes = async () => {
      if (this.props.isSubmitted === true) {
         let search = this.props.search;
         const YOUR_APP_ID = process.env.REACT_APP_YOUR_APP_ID;
         const YOUR_APP_KEY = process.env.REACT_APP_YOUR_APP_KEY;
         let url = `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
         const res = await axios.get(url);
         console.log(res);
         this.setState({
            recipies: res.data.hits,
         });
      }
   };

   render() {
      const recepieList = this.state.recipies.map((object) => {
         return (
            <div key={object.recipe.label}>
               <span>
                  <a href={'/recipe/' + object.recipe.label}>
                     {object.recipe.label}
                  </a>
               </span>
            </div>
         );
      });
      return <div>{recepieList}</div>;
   }
}
export default getRecipe;
