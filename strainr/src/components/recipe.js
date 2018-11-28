import React from 'react'
import { Card,
        CardImg,
        CardText,
        CardBody,
        CardTitle,
        CardSubtitle,
        Button } from 'reactstrap';

const Recipe = (props) => {
  console.log('titles', props.recipe.recipe.label);
  return (
    <Card>
      <CardImg top width="100%" src={props.recipe.recipe.image} alt="Card image cap" />
      <CardBody>
        <CardTitle>{props.recipe.recipe.label}</CardTitle>
        <CardSubtitle>{props.recipe.recipe.totalTime} minute cooking time</CardSubtitle>
        <CardText>{props.recipe.recipe.ingredientLines}</CardText>
        <Button>Button</Button>
        </CardBody>
    </Card>
  )
}

export default Recipe
