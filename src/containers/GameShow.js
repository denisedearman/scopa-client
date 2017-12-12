import React, {Component} from 'react';
import { connect } from 'react-redux';
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
      <div className="col-md-8">
      {
        game ? (
            <div>
            <h2>{game.player_1} vs {game.player_2}</h2>
            <h2>Score: {game.player_1_score ? game.player_1_score : 0} : {game.player_2_score ? game.player_2_score : 0}</h2>
            <button onClick={this.handleOnClick}>Start</button>
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
