import React from 'react';

class SearchDrinks extends React.Component {
  state = {
    alcohol: '',
    mixer: '',
    garnish: ''
  }; // declaring an empty state object

  // passes through the ingredient key which also passes through that event
  handleIngredients = ingredient => e => {
    // updating state to the ingredient key and the event targe value
    this.setState({ [ingredient]: e.target.value });
  };
  handleSubmit = event => {
    // prevents page from reloading
    event.preventDefault();
    // saving the ingredients into one variable
    const ingredients = [this.state.mixer, this.state.alcohol, this.state.garnish].join(',');
    // feeding ingredients into the findDrinks function
    this.props.findDrinks(ingredients);
    // resetting the ingredients after submit
    this.setState({ alcohol: '', mixer: '', garnish: '' });
  };

  render() {
    console.log(this.props);
    return (
      <div id="search">
        <h1>search</h1>
        <form onSubmit={this.handleSubmit}>
          <section id="input-wrapper">
            <span className="input input--chisato">
              <input
                className="input__field input__field--chisato"
                type="text"
                id="input-13"
                name="alcohol"
                // type="search"
                autoComplete="off"
                onChange={this.handleIngredients('alcohol')}
                value={this.state.alcohol}
                pattern="[a-zA-Z ]{1,15}"
                required
              />

              <label className="input__label input__label--chisato">
                <span className="input__label-content input__label-content--chisato" data-content="Alcohol">
                  Alcohol
                </span>
              </label>
            </span>
            <span className="input input--chisato">
              <input
                className="input__field input__field--chisato"
                type="text"
                id="input-13"
                name="mixer"
                // type="search"
                autoComplete="off"
                onChange={this.handleIngredients('mixer')}
                value={this.state.mixer}
                pattern="[a-zA-Z ]{1,15}"
                required
              />
              <label className="input__label input__label--chisato">
                <span className="input__label-content input__label-content--chisato" data-content="Mixer">
                  Mixer
                </span>
              </label>
            </span>
            <span className="input input--chisato">
              <input
                className="input__field input__field--chisato"
                type="text"
                id="input-13"
                name="garnish"
                autoComplete="off"
                onChange={this.handleIngredients('garnish')}
                value={this.state.garnish}
                pattern="[a-zA-Z ]{1,15}"
              />
              <label
                className={`input__label input__label--chisato ${
                  this.state.garnish.length > 0 ? 'input--filled input__label-content--chisato--after' : ''
                }`}
              >
                <span className="input__label-content input__label-content--chisato" data-content="Garnish">
                  Garnish
                </span>
              </label>
            </span>
          </section>
          <div class="submit">
            <button type="submit">Drink!</button>
          </div>
        </form>
      </div>
    ); // end of return
  } // end of render
} // end of class
// no reason
export default SearchDrinks;
