import React, { Component } from 'react';

export class GameText extends Component {
  render() {
    return (
      <div>
        <h1>About Scopa</h1>
        <p>Scopa is an italian card game that is usually played with between 2, 3, 4, or 6 players.<br/>
        This version is only a 2 person game.<br/>
        The game is played with a 40 card deck with cards having a value of 1 through 10 in the four suits: clubs, coins, cups, and swords.<br/>
        </p>
        <h2>How to Play</h2>
        <p>At the start of a game there are 4 cards placed on the table. Each player gets 3 cards.<br/>
        On a player's turn he or she can either: <br/>
        1. Select one or more cards on the table that sum to one of their cards and "capture" these cards.<br/>
        Ex. If there is a 3 and a 2 on the table and a player has a 5 they may capture the 3 and 2 using their 5.<br/>
        2. Place one of their cards on the table.<br/>
        Once the players run out of cards in their hand 3 more cards are dealt to each player. No additional cards are placed on the table. When all cards in the deck have been dealt the round is over.
        </p>
        <h2>Scoring</h2>
        <p>During the game play a player may earn points by capturing all of the cards left on the table - a "scopa"! <br/>
        Anytime a player "scopa"s they earn 1 point. These points are only added at the end of each round.</p>
        <p>At the end of each round there are 4 points may be awarded: <br/>
        1. The player that has the most captured cards.<br/>
        2. The player that has the most captured cards in the suit of coins.<br/>
        3. The player that has captured the sette bello (the seven of coins).<br/>
        4. The player that has the highest prime score. <br/> The prime score is computed by taking each player's highest ranked card in each suit.<br/> The ranking/point system for the prime is as follows:<br/>
           7 - 21 points <br/>
           6 - 18 points <br/>
           5 - 16 points <br/>
           4 - 15 points <br/>
           3 - 13 points <br/>
           2 - 12 points <br/>
           1, 8, 9, 10 - 10 points <br/>
        </p>
      </div>
    )
  }
}
