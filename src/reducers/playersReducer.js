export default (state = [], action) => {
  switch (action.type) {
    case 'GET_PLAYERS' :
      return action.players;
    case 'CREATE_PLAYER_SUCCESS':
      const player = Object.assign({}, action.player, { id: state.length + 1} );
      return [ ...state, player ];
    default:
      return state;
  }
};
