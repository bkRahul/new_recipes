import React from "react";
import {Link} from "react-router-dom";

import style from "../modules/Recipes.module.scss";

const Recipes = props => {
  const recipe = props.recipe;

  return (
    <div className="tile is-4 is-vertical is-parent">
      <article className="recipe tile is-child is-primary is-paddingless">
        <div className={style.recipe__thumb}>
          <img
            src={recipe.image_url}
            className={style.recipe__image}
            alt={recipe.title}
          />
        </div>
        <div className={style.recipe__content}>
          <h2 className={`${style.recipe__title} title is-5`}>
            {recipe.title.length < 24
              ? `${recipe.title}`
              : `${recipe.title.substring(0, 25)}...`}
          </h2>
          <p className={style.recipe__publisher}>
            <a
              href={recipe.publisher_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {recipe.publisher}
            </a>
          </p>
          <footer className={style.content__footer}>
          <Link to={{pathname: `/recipe/${recipe.recipe_id}`,
        state : { recipe : recipe.title}}}>Get Recipe</Link>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default Recipes;
