import React from "react";

const Header = () => {
  return (
    <header className="app-header">
      <section className="hero">
        <div className="hero-body has-text-centered">
          <div className="container">
            <h1 className="title">New Recipes</h1>
            <h2 className="subtitle">
              A simple recipe App built with <b>React</b> and <b>Bulma</b> using <b>Food2Fork</b> API
            </h2>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
