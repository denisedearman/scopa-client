import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPlayer, updatePlayerFormData } from '../actions';

class PlayersNew extends Component {

  handleOnSubmit = event => {
    event.preventDefault();
    const { createPlayer, playerFormData, history } = this.props
    createPlayer(playerFormData, history);
  }

  handleOnChange = event => {
    const {name, value} = event.target;
    const currentPlayerForm = Object.assign({}, this.props.playerFormData, {
      [name]: value
    })
    this.props.updatePlayerFormData(currentPlayerForm)
  }

  render() {
    const {name} = this.props.playerFormData;
    return (
      <div>
        <h2>Add a Player</h2>
        <form onSubmit={this.handleOnSubmit} >
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.handleOnChange} />
          <input
            type="submit"
            value="Add Player" />
        </form>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    playerFormData: state.playerFormData,
    errors: state.errors
  }
}

export default connect(mapStateToProps, { updatePlayerFormData, createPlayer })(PlayersNew);
