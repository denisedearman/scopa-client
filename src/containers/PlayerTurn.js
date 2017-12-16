import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPlayerTurn } from '../actions/playerActions';

class PlayerTurn extends Component {
  componentDidMount(){
    this.props.getPlayerTurn(this.props.match.params.gameId, this.props.match.params.playerId);
  }


  render() {
    let player = this.props.player;

    return(
      <div className="col-md-8">
      {
          player && player.turn ? (<div><h3>It's your turn {player.name}!</h3>
          <Link to={`/games/${this.props.match.params.gameId}/players/${this.props.match.params.playerId}/edit`}>Play</Link>
          </div>
          ):
          player ? (<h3> {player.name} It's not your turn yet.</h3>):(<p>None</p>)
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    player: state.player
  })
};

export default connect(mapStateToProps, {getPlayerTurn})(PlayerTurn);
