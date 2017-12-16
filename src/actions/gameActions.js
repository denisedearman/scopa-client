const API_URL = process.env.REACT_APP_API_URL;

export function addGame(game) {
  return{
    type: 'CREATE_GAME_SUCCESS',
    game
  }
}

export function setGames(games) {
 return{
   type: 'GET_GAMES',
   games
 }
}

export function setCurrentPlayer(current_player) {
  return{
    type: 'GET_CURRENT_PLAYER',
    current_player
  }
}

export function setGame(game) {
 return{
   type: 'GET_GAME',
   game
 }
}

export function createGame(gameFormData, history){
  return dispatch => {
    return fetch(`${API_URL}/games`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {game:
          {player_1: gameFormData.player_1,
            player_2: gameFormData.player_2,
            cards: []
          }
      })
    })
    .then(response => response.json())
    .then(game => {dispatch(addGame(game))
    dispatch(resetGameForm())
    history.replace(`/games/${game.game_id}`)
    })
    .catch(err => {
      console.log("error: ", err)
      history.replace(`/games/new`)
    })
  }
}

export function updateGame(game_id, player_id, playerTurnFormData, history){
  return dispatch => {
    return fetch(`${API_URL}/games/${game_id}/players/${player_id}/update`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {player:
          {
            hand: playerTurnFormData.hand,
            table: playerTurnFormData.table
          }
      })
    })
    .then(response => response.json())
    .then(player => {dispatch(setCurrentPlayer(player))
    dispatch(resetPlayerTurnFormData())
    history.replace(`/games/${game_id}/players/${player.player_id}`)
    })
    .catch(err => {
      console.log("error: ", err)
    })
  }
}

export function getPlayerGameEdit(game_id, player_id) {
  return dispatch => {
    return fetch(`${API_URL}/games/${game_id}/players/${player_id}/edit`)
      .then(response => response.json())
      .then(playerTurnFormData => {
        dispatch(updatePlayerTurnFormData(playerTurnFormData))
      })
      .catch(error => console.log("Error ", error))
  }
}


export function getGames() {
    return dispatch => {
        return fetch(`${API_URL}/games`)
			.then(response => response.json())
			.then(games => {
        dispatch(setGames(games))
      })
			.catch(error => console.log("Error ", error))
    }
}


export function getGame(gameId) {
    return dispatch => {
        return fetch(`${API_URL}/games/${gameId}`)
			.then(response => response.json())
			.then(game => {
        dispatch(setGame(game))
      })
			.catch(error => console.log("Error ", error))
    }
}

export function playGame(gameId, history){
  return dispatch => {
      return fetch(`${API_URL}/games/${gameId}/play`)
    .then(response => response.json())
    .then(current_player => {
      dispatch(setCurrentPlayer(current_player))
      history.replace(`/games/${gameId}/players/${current_player.id}`)
    })
    .catch(error => console.log("Error ", error))
  }
}

export const updateGameFormData= gameFormData => {
  return{
    type: 'UPDATED_GAME',
    gameFormData
  }
}

export const updatePlayerTurnFormData = playerTurnFormData => {
  return {
    type: 'UPDATED_PLAYER_TURN_FORM',
    playerTurnFormData
  }
}

export const resetPlayerTurnFormData = () => {
  return{
    type: 'RESET_PLAYER_TURN_FORM'
  }
}

export const resetGameForm = () => {
  return{
    type: 'RESET_GAME_FORM'
  }
}
