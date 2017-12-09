export default (state = [], action) => {
  switch (action.type) {
    case 'GET_GAMES' :
      return action.games;
    case 'CREATE_GAME_SUCCESS':
      const game = Object.assign({}, action.game, { id: state.length + 1} );
      return [ ...state, game ];
    default:
      return state;
  }
};
