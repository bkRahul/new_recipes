import React from "react";

const Form = (props) => {
  return (

        <div className="columns is-centered">
          <div className="column is-half ">
            <form onSubmit={props.getRecipe}>
              <div className="field">
                <label className="label">Enter Recipe</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="recipeName"
                    placeholder="Recipe Name"
                  />
                </div>
              </div>
              <div className="control has-text-centered">
                <button className="button is-primary">Search</button>
              </div>
            </form>
          </div>
        </div>

  );
};

export default Form;
