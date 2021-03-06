import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getGame, playGame } from '../actions/gameActions';

class GameShow extends Component {
  componentDidMount(){
    this.props.getGame(this.props.match.params.gameId);
  }

  handleOnClick = event => {
    const {history} = this.props
    this.props.playGame(this.props.match.params.gameId, history);
  }

  render() {
    let game = this.props.game;

    return(
      <div className="container-fluid">
      {
        game ? (
            <div>
            <h2>{game.player_1} vs {game.player_2} </h2>
            <h3> {game.player_1} has captured {game.player_1_captured} cards </h3>
            <h3> {game.player_2} has captured {game.player_2_captured} cards </h3>
            <h2>Score: {game.player_1_points ? game.player_1_points : 0} : {game.player_2_points ? game.player_2_points : 0}</h2>
            {game.status === "end" ? <Link to={`/games/${this.props.match.params.gameId}/summary`}>View Round Summary</Link> : <button onClick={this.handleOnClick}>Start</button>}
            </div>
        ) : (<p>None</p>)
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

export default connect(mapStateToProps, {getGame, playGame})(GameShow);
