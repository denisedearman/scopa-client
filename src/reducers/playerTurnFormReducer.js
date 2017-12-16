const initialState = {
  table: [],
  hand: []
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
