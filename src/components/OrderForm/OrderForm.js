import React, { Component } from 'react';

class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleNameChange = e => {
    e.preventDefault();
    const name = e.target.value;
    console.log({name});
    this.setState({name});
  }

  handleIngredientChange = e => {
    e.preventDefault();
    const ingredient = e.target.name;
    const addedIngredients = this.state.ingredients || [];
    addedIngredients.push(ingredient);
    console.log(addedIngredients);
    this.setState({ingredients: addedIngredients})
  }

  // const onChange = evt => {
  //   console.log(`TASK 8- Obtain 'name' and 'value' from the target of the event,
  //     and utilize the correct callback to update the state of the form.`)
  //     const {name, value} = evt.target
  //     setValues({...values, [name]: value});
  // }


  handleSubmit = e => {
    e.preventDefault();
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
