import React, { Component } from "react";

class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: "",
      ingredients: [],
    };
  }

  handleNameChange = (e) => {
    e.preventDefault();
    const name = e.target.value;
    this.setState({ name });
  };

  handleIngredientChange = (e) => {
    e.preventDefault();
    const ingredient = e.target.name;
    const addedIngredients = this.state.ingredients || [];
    addedIngredients.push(ingredient);
    this.setState({ ingredients: addedIngredients });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // HANDLE POST
    let newOrder = {
      name: this.state.name,
      ingredients: this.state.ingredients,
    };

    if (!newOrder.name.length) {
      alert("Name is required.");
    } else if (!newOrder.ingredients.length) {
      alert("Please choose at least one ingredient.");
    } else {
      return fetch("http://localhost:3001/api/v1/orders", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newOrder),
      })
        .then((response) => response.json())
        .then((newOrder) => {
          this.props.addOrder(newOrder);
          this.clearInputs();
        })
        .catch((err) => console.log(err));
    }
  };

  clearInputs = () => {
    this.setState({ name: "", ingredients: [] });
  };

  render() {
    const possibleIngredients = [
      "beans",
      "steak",
      "carnitas",
      "sofritas",
      "lettuce",
      "queso fresco",
      "pico de gallo",
      "hot sauce",
      "guacamole",
      "jalapenos",
      "cilantro",
      "sour cream",
    ];
    const ingredientButtons = possibleIngredients.map((ingredient) => {
      return (
        <button
          key={ingredient}
          name={ingredient}
          onClick={(e) => this.handleIngredientChange(e)}
        >
          {ingredient}
        </button>
      );
    });

    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={(e) => this.handleNameChange(e)}
        />

        {ingredientButtons}

        <p>Order: {this.state.ingredients.join(", ") || "Nothing selected"}</p>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default OrderForm;
