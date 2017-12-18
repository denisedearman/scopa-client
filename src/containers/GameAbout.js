import React, { Component } from 'react';
import { connect } from 'react-redux';
import {GameText} from '../components/GameText';


class GameAbout extends Component {
  render() {
    return(
      <div>
        <GameText/>
      </div>
    )
  }
}


export default (GameAbout);
