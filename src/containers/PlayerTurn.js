import React, {Component} from 'react';
import { connect } from 'react-redux';
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
        player ? (<h2>{player.name}</h2>) : (<p>None</p>)
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
