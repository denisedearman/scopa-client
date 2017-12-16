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

  onClickTable = event => {
    const{name, value} = event.target;
    if (event.target.style.backgroundColor == "") {
      event.target.style.backgroundColor = "yellow"
      const currentTable = Object.assign({}, this.props.playerTurnFormData.selectedTable,{
        [name]: true
      });
      const currentPlayerTurnForm = Object.assign({}, this.props.playerTurnFormData, {
        selectedTable: currentTable
      })
      this.props.updatePlayerTurnFormData(currentPlayerTurnForm)
    } else {
      event.target.style.backgroundColor = ""
      delete this.props.playerTurnFormData.selectedTable[name];
      const currentPlayerTurnForm = Object.assign({}, this.props.playerTurnFormData)
      this.props.updatePlayerTurnFormData(currentPlayerTurnForm)
    }
  }

  onClickHand = event => {
    const{name, value} = event.target;
    if (event.target.style.backgroundColor == "") {
      event.target.style.backgroundColor = "yellow"
      const currentHand = Object.assign({}, this.props.playerTurnFormData.selectedHand,{
        [name]: true
      });
      const currentPlayerTurnForm = Object.assign({}, this.props.playerTurnFormData, {
        selectedHand: currentHand
      })
      this.props.updatePlayerTurnFormData(currentPlayerTurnForm)
    } else {
      event.target.style.backgroundColor = ""
      delete this.props.playerTurnFormData.selectedHand[name]
      const currentPlayerTurnForm = Object.assign({}, this.props.playerTurnFormData)
      this.props.updatePlayerTurnFormData(currentPlayerTurnForm)
    }
  }

  render() {
    const {hand, table} = this.props.playerTurnFormData;
    return (
      <div>
        <h2>Capture or Place a card onto the table</h2>

        <form onSubmit={this.handleOnSubmit} >
          <h2>Table</h2>
          {table.map(card => <input type="button" name={card.id} onClick={this.onClickTable} placeholder={card.id} value={card.value + " of " + card.suit}/>)}
          <h2> Your Hand </h2>
          {hand.map(card => <input type="button" name={card.id} onClick={this.onClickHand} value={card.value + " of " + card.suit}/>)}
          <br/><br/>
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
