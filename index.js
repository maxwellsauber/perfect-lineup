const validateLineup = (lineup) => {
  const gamePositions = lineup.map((lineup) => lineup.position)

  return calculateSalary <= 45.000 &&
    calculateNumberPlayers(lineup.map((lineup) => lineup.teamId)) <= 2 &&
    calculateNumberPlayers(lineup.map((lineup) => lineup.gameId)) <= 3 &&
    getOccurrence(gamePositions, 'OF') === 3 &&
    getOccurrence(gamePositions, 'P') === 1 &&
    getOccurrence(gamePositions, 'C') === 1 &&
    getOccurrence(gamePositions, '1B') === 1 &&
    getOccurrence(gamePositions, '2B') === 1 &&
    getOccurrence(gamePositions, '3B') === 1 &&
    getOccurrence(gamePositions, 'SS') === 1



  // Need one of each of these -- FUNCTION WOULD BE CLEANER THAN CHECKING EACH INDIVIDUALLT
  // return checkIndividualPositions(gamePositions)
}

// This would be cleaner than seperate variables, but doesnt work....!!!!
/*
const checkIndividualPositions = (gamePositions) => {
  const individualPositions = ['P', 'C', '1B', '2B', '3B', 'SS']

  for (let i = 0; i < individualPositions.length; i++) {
    return getOccurrence(gamePositions, individualPositions[i]) === 1
    // This only returns the first item...
  }
}
*/

const calculateSalary = (lineup) => {
  return lineup.map((lineup) => lineup.salary)
    .reduce((total, salary) => total + salary, 0)
}

const calculateNumberPlayers = (players) => {
  for (let i = 0; i < players.length; i++) {
    return getOccurrence(players, players[i])
  }
}

const getOccurrence = (array, value) => {
  return array.filter((v) => (v === value)).length
}

module.exports = validateLineup
