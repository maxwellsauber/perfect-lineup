const validateLineup = (lineup) => {
  const gamePositions = lineup.map((lineup) => lineup.position)

  return calculateSalary <= 45000 &&
    calculateNumberPlayers(lineup.map((lineup) => lineup.teamId)) <= 2 &&
    calculateNumberPlayers(lineup.map((lineup) => lineup.gameId)) <= 3 &&
    getOccurrence(gamePositions, 'OF') === 3 &&
    getOccurrence(gamePositions, 'P') === 1 &&
    getOccurrence(gamePositions, 'C') === 1 &&
    getOccurrence(gamePositions, '1B') === 1 &&
    getOccurrence(gamePositions, '2B') === 1 &&
    getOccurrence(gamePositions, '3B') === 1 &&
    getOccurrence(gamePositions, 'SS') === 1


  // FUNCTION WOULD BE CLEANER THAN CHECKING EACH INDIVIDUALLT
  // return checkIndividualPositions(gamePositions), couldnt figure that out
}

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
