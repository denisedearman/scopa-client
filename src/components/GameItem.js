import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class GameItem extends Component {
  render() {
    const {game, games} = this.props;
    return (
      <div key={game.id} className="GameItem">
        <Link style={{ marginRight: '12px' }} key={game.id} to={`/games/${game.id}`}>{game.player_1} vs {game.player_2}</Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    games: state.games
  }
}

export default connect(mapStateToProps, {})(GameItem);
