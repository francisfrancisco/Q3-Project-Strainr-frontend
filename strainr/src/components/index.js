import React, { Component } from 'react';
import Login from './login'
import { Jumbotron, Container } from 'reactstrap';

class Index extends Component  {

  render(){
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Epic Meal Timed</h1>
            <p className="lead">Strain through thousands of recipes based on cook time.</p>
          </Container>
        </Jumbotron>
        <Login />
      </div>
    );
  }
};

export default Index;
