const API_URL = process.env.REACT_APP_API_URL;

export function addPlayer(player){
  return{
    type: 'CREATE_PLAYER_SUCCESS',
    player
  }
}

export function createPlayer(player, history){
  return dispatch => {
    return fetch(`${API_URL}/players`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({player: player})
    })
    .then(response => response.json())
    .then(player => {dispatch(addPlayer(player))
    dispatch(resetPlayerForm())
    history.replace(`/players/${player.id}`)
    })
    .catch(err => {
      console.log("error: ", err)
      history.replace(`/recipes/new`)
    })
  }
}

export function setPlayers(players) {
 return{
   type: 'GET_PLAYERS',
   players
 }
}

export function getPlayers() {
    return dispatch => {
        return fetch(`${API_URL}/players`)
			.then(response => response.json())
			.then(players => {
        dispatch(setPlayers(players))
      })
			.catch(error => console.log("Error ", error))
    }
}

  export const updatePlayerFormData = playerFormData => {
    return{
      type: 'UPDATED_PLAYER',
      playerFormData
    }
  }

  export const resetPlayerForm = () => {
    return{
      type: 'RESET_PLAYER_FORM'
    }
  }
