const validateLineup = (lineup) => {

  // if salary > 45.000 - FALSE
  // return calculateSalary(lineup) // Function working!


  // if players 'OF' < 3 -- FALSE
  // if players dont have ALL --- 'P', 'C', '1B', '2B', '3B', 'SS' -- False


  // if calculateTeamPlayers > 2 -- FALSE
  //return calculateTeamPlayers(lineup) <= 2 //WORKSSSSSS

  // if calculateGamePlayers > 3 -- FALSE
  return calculateGamePlayers(lineup) <= 3
}

// WHRE DID WE DO SUM ALL WITH REDUCEEEEEE THIS IS SUM ALL!
const calculateSalary = (lineup) => {
  let totalSalary = 0

  for (let i = 0; i < lineup.length; i++) {
    totalSalary += lineup[i].salary
  }

  return totalSalary < 45000

}

const calculateGamePlayers = (lineup) => {
  let gamePlayers = []
  // THIS IS BAD FIX IT!!!!

  // Put all GAME players in array.... Destructuring??????
  for (let i = 0; i < lineup.length; i++) {
    gamePlayers.push(lineup[i].gameId)
  }
  // Check that there are 2 or less plauers on a team.... Howww???
  for (let i = 0; i < gamePlayers.length; i++) {
    return getOccurrence(gamePlayers, gamePlayers[i])
  }
}


const calculateTeamPlayers = (lineup) => {
  let teamPlayers = []
  // THIS IS BAD FIX IT!!!!

  // Put all team players in array.... Destructuring??????
  for (let i = 0; i < lineup.length; i++) {
    teamPlayers.push(lineup[i].teamId)
  }
  // Check number of team players.... Howww to merge???
  for (let i = 0; i < teamPlayers.length; i++) {
    return getOccurrence(teamPlayers, teamPlayers[i])
  }
}

const getOccurrence = (array, value) => {
  return array.filter((v) => (v === value)).length
}


/*
## Lineup Rules
1) The total salary of all players in a lineup may not exceed $45,000
2) Lineups may not contain more than 2 players from a single team
3) Lineups may not contain more than 3 players from a single game
4) Lineups must contain exactly 3 players with the position of 'OF' and must also contain exactly 1 player from each of the following positions: 'P', 'C', '1B', '2B', '3B', 'SS'

*/
module.exports = validateLineup
