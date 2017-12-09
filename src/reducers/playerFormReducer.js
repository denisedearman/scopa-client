const initialState = {
  name: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATED_PLAYER':
      return action.playerFormData;
    case 'RESET_PLAYER_FORM':
      return initialState;
    default:
      return state;
  }
}
