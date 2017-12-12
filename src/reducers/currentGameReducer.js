export default (state = [], action) => {
  switch (action.type) {
    case 'GET_GAME':
      return action.game;
    default:
        return state;
  }
};
