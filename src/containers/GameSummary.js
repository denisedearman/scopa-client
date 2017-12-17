import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getGameSummary} from '../actions/gameActions';

class GameSummary extends Component {
  componentDidMount(){
    this.props.getGameSummary(this.props.match.params.gameId);
  }

  render() {
    let game = this.props.game;

    return(
      <div className="col-md-8">
      {
        game ?
          game.status == "end" ?
          (
              <div>
              <h1>{game.player_1} vs {game.player_2}</h1>
              <h2>Total Score: {game.player_1_points ? game.player_1_points : 0} : {game.player_2_points ? game.player_2_points : 0}</h2>
              <h3>This Round:</h3>
              <h3>Point for the player with the most captured cards: {game.most_cards}</h3>
              <h3>Point for the player with the most coin cards: {game.most_coins}</h3>
              <h3>Point for the Sette Bello (capturing the seven of coins): {game.sette_bello}</h3>
              <h3>Point for the player with the highest "prime" score: {game.prime}</h3>
              <h3>+ Scopa Points: </h3>
              <h3>{game.player_1}: {game.player_1_scopa}</h3>
              <h3>{game.player_2}: {game.player_2_scopa}</h3>
              <h2>Table</h2>
              {game.table.map(card => <input type="button" name={card.id} value={card.value + " of " + card.suit} disabled/>)}
              <h2>{game.player_1}'s Captures </h2>
              {game.player_1_captured.map(card => <input type="button" name={card.id} value={card.value + " of " + card.suit} disabled/>)}
              <h2>{game.player_2}'s Captures </h2>
              {game.player_2_captured.map(card => <input type="button" name={card.id} value={card.value + " of " + card.suit} disabled/>)}
              </div>
          )
          :
          (
              <div>
              <h2>{game.player_1} vs {game.player_2}</h2>
              <h2>Game in Progress</h2>
              <h2>Score: {game.player_1_score ? game.player_1_score : 0} : {game.player_2_score ? game.player_2_score : 0}</h2>
              <Link to={`/games/${this.props.match.params.gameId}`}>Continue Playing</Link>

              </div>
          )

        : (<p>None</p>)
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    game: state.game
  })
};

export default connect(mapStateToProps, {getGameSummary})(GameSummary);
