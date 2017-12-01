import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getPlayers } from '../actions/index.js';

class PlayersShow extends Component {
  componentDidMount(){
    this.props.getPlayers(this.props.match.params.playerId);
  }

  render() {
    let player = this.props.player[0];

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
    player: state.players
  })
};

export default connect(mapStateToProps, {getPlayers})(PlayersShow);
