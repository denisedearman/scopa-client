import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPlayer } from '../actions';

class PlayersNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { createPlayer, history } = this.props
    createPlayer(this.state);
    history.push('/players');
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Add a Player</h2>
        <form onSubmit={this.handleOnSubmit} >
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.handleOnChange} />
          <input
            type="submit"
            value="Add Player" />
        </form>
      </div>
    );
  }
};

export default connect(null, { createPlayer })(PlayersNew);
