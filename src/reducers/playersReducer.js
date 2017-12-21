export default (state = [], action) => {
  switch (action.type) {
    case 'GET_PLAYERS' :
      return action.players;
    case 'CREATE_PLAYER_SUCCESS':
      const player = Object.assign({}, action.player, { id: state.length + 1} );
      return [ ...state, player ];
    case 'ADD_LIKE' :
      return state.map((player) => {return (player.id === action.player.id ? action.player : player)});
    default:
      return state;
  }
};
