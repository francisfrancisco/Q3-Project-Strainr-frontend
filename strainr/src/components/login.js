import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {  } from '../redux/actions/recipes-actions'; //make login actions


class Login extends Component {

  render(){

    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    )
  }
}

export default connect(null, {})(Login)
