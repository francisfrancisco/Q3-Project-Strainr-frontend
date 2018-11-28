import React, {Component} from 'react'
// import Recipe from './Recipe'
import {connect} from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { fetchRecipes } from '../redux/actions/recipes-actions';

class RecipeSearch extends Component {
  state = {
    cookTime: '',
    protein: ''
  }

  handleChange = e => {
    this.setState({
      cookTime: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchRecipes(this.state.cookTime, this.state.protein)
  }

  render(){

  return (
    <div style={{margin: '0 auto', width: '50%', textAlign: 'left'}}>
    <Form onSubmit={this.handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">How many minutes?</Label>
        <Input type="text" name="time" id="exampleEmail" onChange={this.handleChange} value={this.state.cookTime} placeholder="" />
        <FormGroup tag="fieldset">
          <legend>What's Cookin?</legend>
          <FormGroup check>
            <Label check>
              <Input
              type="radio"
              name="protein"
              onChange={() => this.setState({protein: 'chicken'})}/>{' '}
              Chicken
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
              type="radio"
              name="protein"
              onChange={() => this.setState({protein: 'beef'})}/>{' '}
              Beef
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
              type="radio"
              name="protein"
               onChange={() => this.setState({protein: 'pork'})}/>{' '}
              Pork
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
              type="radio"
              name="protein"
              onChange={() => this.setState({protein: 'Seafood'})}/>{' '}
              Seafood
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
              type="radio"
              name="protein"
              onChange={() => this.setState({protein: 'vegetarian'})}/>{' '}
              Veggies
            </Label>
          </FormGroup>
        </FormGroup>
      </FormGroup>
      <Button type='submit'>asdf</Button>
    </Form>
    </div>
  )
  }
}

// const mapStateToProps = state => {
//   return {
//     recipes: state.recipes
//   }
// }

export default connect(null, {fetchRecipes})(RecipeSearch)
