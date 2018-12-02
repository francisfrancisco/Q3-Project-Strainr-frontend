import React, {Component} from 'react'
import { connect } from 'react-redux';
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
    <div>
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <h3>Maximum Cook Time</h3>
          <Input type="text" name="time" id="exampleEmail" onChange={this.handleChange} value={this.state.cookTime} placeholder="" />
        </FormGroup>
        <FormGroup tag="fieldset">
          <h3>Protein</h3>
        </FormGroup>
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
        <Button style={{marginTop:'15px'}} type='submit'>Strain</Button>
      </Form>
    </div>
  )
  }
}

export default connect(null, {fetchRecipes})(RecipeSearch)
