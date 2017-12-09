const initialState = {
  player_1: '',
  player_2: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATED_GAME':
      return action.gameFormData;
    case 'RESET_GAME_FORM':
      return initialState;
    default:
      return state;
  }
}
