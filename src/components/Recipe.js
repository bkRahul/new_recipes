import React from "react";
//import { async } from "q";

import {Link} from "react-router-dom";
import style from "../modules/Recipe.module.scss";

const API_KEY = "27ec3b17dc44e151983cf1e0cbbc9752";

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  };

  componentDidMount = async () => {
    const RECIPE_TITLE = this.props.location.state.recipe;
    const req = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${RECIPE_TITLE}`
    );
    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
    console.log(res);
  };

  render() {
    const activeRecipe = this.state.activeRecipe;
    return (
      <div className="section">
        <article className="activeRecipe container">
          <div className="columns is-mobile">
            <div className="column is-4 is-offset-one-third">
              <div className={style.recipe__thumb}>
                <img
                  src={activeRecipe.image_url}
                  className={style.recipe__image}
                  alt={activeRecipe.title}
                />
              </div>
              <div className={style.recipe__content}>
                <h2 className={`${style.recipe__title} title is-5`}>
                  {activeRecipe.title}
                </h2>

                <p className={style.recipe__publisher}><b>Publisher :</b>   
{activeRecipe.publisher}
                </p>

                <p className={style.recipe__publisher}><b>Website :</b>   
                  <a
                    href={activeRecipe.publisher_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                     {activeRecipe.publisher_url}
                  </a>
                </p>
                <p className={style.recipe__publisher}><b>  
                  <a
                    href={activeRecipe.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                     View Source Recipe
                  </a></b>  
                </p>
                <footer className={style.content__footer}>
              <Link to="/">
                     Go Back
                     </Link>
          </footer>
              </div>

        </div></div>
      </article>
      </div>
    );
  }
}

export default Recipe;
