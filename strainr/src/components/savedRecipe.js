import React, {Component} from 'react';
import Comment from './comment';
import { ListGroupItem, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from 'react-redux';

class SavedRecipe extends Component {

  state = {
      modal: false,
      nestedModal: false,
      closeAll: false
    };

  toggle = this.toggle.bind(this);
  toggleNested = this.toggleNested.bind(this);
  toggleAll = this.toggleAll.bind(this);

  toggle() {
   this.setState({
     modal: !this.state.modal
    });
  }

  toggleNested() {
   this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleAll() {
    this.setState({
     nestedModal: !this.state.nestedModal,
     closeAll: true
    });
  }

  render(){
    let commentList = this.props.comments.map(comment => <Comment key={comment.id} comment={comment} />)
    return (
      <div className='row'>
        <ListGroupItem className='col-12 d-flex justify-content-between align-items-center' tag="a" href={this.props.recipe.saved_recipe_url} target="_blank">
          {this.props.recipe.saved_recipe_name}
          <a href='#' class="badge badge-primary badge-pill" onClick={this.toggle}>notes</a>
        </ListGroupItem>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.recipe.saved_recipe_name}</ModalHeader>
          <ModalBody>
          {commentList}
            <Button color="success" onClick={this.toggleNested}>Update</Button>
            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
              <ModalHeader>Nested Modal title</ModalHeader>
              <ModalBody>Stuff and things</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleNested}>Done</Button>{' '}
                <Button color="secondary" onClick={this.toggleAll}>All Done</Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>OK</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Delete</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps)(SavedRecipe)
