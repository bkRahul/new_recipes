import React from "react";

import Form from "./Form.js";
import Recipes from "./Recipes.js";

const API_KEY = "27ec3b17dc44e151983cf1e0cbbc9752";

class Content extends React.Component {

  state = {
    recipes: []
  };




  getRecipes = async(e) => {
    const RECIPE_NAME = e.target.elements.recipeName.value;
    e.preventDefault();
    const response = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${RECIPE_NAME}&page=2 `);
    const data = await response.json();
    this.setState({recipes : data.recipes})
    console.log(this.state.recipes);
  }



  render(){
  return (
    <section className="section">
    <div className="container">   
  <Form getRecipe={this.getRecipes}/>
      <div className="recipe-container columns is-multiline">
  {this.state.recipes.map(recipe => (
  <Recipes recipe={recipe} key={recipe.recipe_id}/>
  ))}
  </div>
  </div>
    </section>  
    );
}
};

export default Content;
