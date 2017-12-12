export default (state = [], action) => {
  switch (action.type) {
    case 'GET_CURRENT_PLAYER':
      return action.current_player;
    default:
        return state;
  }
};
