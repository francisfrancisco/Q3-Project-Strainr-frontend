import React from 'react'
import { Card,
        CardImg,
        CardBody,
        CardTitle,
        CardSubtitle,
        Button } from 'reactstrap';

const Recipe = (props) => {
  return (
    <Card className="col-2" style={{margin: '20px'}}>
      <CardImg top width="100%" src={props.recipe.recipe.image} alt="Card image cap"/>
      <CardBody>
        <CardTitle>{props.recipe.recipe.label}</CardTitle>
        <CardSubtitle>{props.recipe.recipe.totalTime} minute cooking time</CardSubtitle>
        <CardSubtitle>{props.recipe.recipe.dietLabels.join(', ')}</CardSubtitle>
        <CardSubtitle>{props.recipe.recipe.healthLabels.join(', ')}</CardSubtitle>
        <Button color='primary'><a style={{color:'white', textDecoration:'none'}} href={props.recipe.recipe.url} target="_blank" rel="noopener noreferrer">Recipe</a>
        </Button>
      </CardBody>
    </Card>
  )
}

export default Recipe
