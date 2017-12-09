import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGame, createGameFormData } from '../actions/gameActions';

class GamesNew extends Component {

  handleOnSubmit = event => {
    event.preventDefault();
    const { createGame, gameFormData, history } = this.props
    createGame(gameFormData, history);
  }

  handleOnChange = event => {
    const {name, value} = event.target;
    const currentGameForm = Object.assign({}, this.props.gameFormData, {
      [name]: value
    })
    this.props.updateGameFormData(currentGameForm)
  }

  render() {
    const {player_1, player_2} = this.props.gameFormData;
    return (
      <div>
        <h2>Add Players to Game</h2>
        <form onSubmit={this.handleOnSubmit} >
          <input
            type="text"
            placeholder="Player 1"
            name="player_1"
            value={player_1}
            onChange={this.handleOnChange} />
            <input
              type="text"
              placeholder="Player 2"
              name="player_2"
              value={player_2}
              onChange={this.handleOnChange} />
          <input
            type="submit"
            value="Create Game" />
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
