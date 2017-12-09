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

export function createGame(player_1, player_2, history){
  return dispatch => {
    return fetch(`${API_URL}/games`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {game:
          {player_1: player_1,
            player_2: player_2
          }
      })
    })
    .then(response => response.json())
    .then(game => {dispatch(addGame(game))
    dispatch(resetGameForm())
    history.replace(`/games/${game.id}`)
    })
    .catch(err => {
      console.log("error: ", err)
      history.replace(`/games/new`)
    })
  }
}

export const updateGameFormData= gameFormData => {
  return{
    type: 'UPDATED_GAME',
    gameFormData
  }
}

export const resetGameForm = () => {
  return{
    type: 'RESET_GAME_FORM'
  }
}