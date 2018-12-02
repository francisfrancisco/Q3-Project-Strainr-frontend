import React from 'react'
import { Card,
        CardImg,
        CardBody,
        CardTitle,
        CardSubtitle,
        Button } from 'reactstrap';

const Recipe = (props) => {
  return (
    <Card className="col-3" style={{margin: '25px'}}>
      <CardImg top width="100%" src={props.recipe.recipe.image} alt="Card image cap"/>
      <CardBody>
        <CardTitle><a style={{textDecoration:'none'}} href={props.recipe.recipe.url} target="_blank" rel="noopener noreferrer">{props.recipe.recipe.label}</a></CardTitle>
        <CardSubtitle>{props.recipe.recipe.totalTime} minute cooking time</CardSubtitle>
        <CardSubtitle>{props.recipe.recipe.dietLabels.join(', ')}</CardSubtitle>
        <CardSubtitle>{props.recipe.recipe.healthLabels.join(', ')}</CardSubtitle>
        <Button color='primary'><a style={{color:'white', textDecoration:'none'}} href='#' target="_blank" rel="noopener noreferrer">Save</a>
        </Button>
      </CardBody>
    </Card>
  )
}

export default Recipe
