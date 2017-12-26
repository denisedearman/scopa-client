const initialState = {
  table: [],
  hand: [],
  player: {},
  player_captures: 0
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATED_PLAYER_TURN_FORM':
      return action.playerTurnFormData;
    case 'RESET_PLAYER_TURN_FORM':
      return initialState;
    default:
      return state;
  }
}
