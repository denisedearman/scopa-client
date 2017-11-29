export function addPlayer(player){
  return{
    type: 'CREATE_PLAYER_SUCCESS',
    player
  }
}

export function createPlayer(state){
  return dispatch => {
    return fetch('/players',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        player: Object.assign({}, state, {
          name: state.name
        })
      })
    })
    .then(response => response.json())
    .then(player => dispatch(addPlayer(player)))
    .catch(err => console.log("error: ", err))
  }
}

export function getPlayers() {
    return dispatch => {
        return fetch(`/players`)
			.then(response => response.json())
			.then(players => dispatch(setPlayers(players)))
			.catch(error => console.log("Error ", error))
    }
}


 export function setPlayers(players) {
  return{
    type: 'GET_PLAYERS_SUCCESS',
    players
  }
}
