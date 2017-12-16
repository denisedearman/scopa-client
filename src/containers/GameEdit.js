import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlayerGameEdit, updateGame, updatePlayerTurnFormData } from '../actions/gameActions';

class GameEdit extends Component {

  componentDidMount(){
    this.props.getPlayerGameEdit(this.props.match.params.gameId, this.props.match.params.playerId);
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { updateGame, playerTurnFormData, history } = this.props
    updateGame(this.props.match.params.gameId, this.props.match.params.playerId, playerTurnFormData, history);
  }

  handleOnChange = event => {
    const {name, value} = event.target;
    const currentPlayerTurnForm = Object.assign({}, this.props.playerTurnFormData, {
      [name]: value
    })
    this.props.updatePlayerTurnFormData(currentPlayerTurnForm)
  }

  render() {
    const {hand, table} = this.props.playerTurnFormData;
    return (
      <div>
        <h2>Capture or Place a card onto the table</h2>
        <form onSubmit={this.handleOnSubmit} >
          <h2>Table</h2>
          {table.map(card => <input type="button" placeholder={card.name} name={card.id} key={card.id} onChange={this.handleOnChange} />)}
          <h2> Your Hand </h2>
          {hand.map(card => <input type="button" placeholder={card.name} name={card.id} key={card.id} onChange={this.handleOnChange} />)}
          <input
            type="submit"
            value="Play Move" />
        </form>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    playerTurnFormData: state.playerTurnFormData,
    errors: state.errors
  }
}

export default connect(mapStateToProps, { getPlayerGameEdit, updatePlayerTurnFormData, updateGame })(GameEdit);
