export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PLAYERS' :
      return action.players;
    case 'GET_PLAYERS_SUCCESS':
      return Object.assign({}, state,  {players: action.players});
    case 'CREATE_PLAYER_SUCCESS':
      const player = Object.assign({}, action.player, { id: state.length + 1} );
      return [ ...state, player ];
    default:
      return state;
  }
};
