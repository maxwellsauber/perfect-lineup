const validateLineup = (lineup) => {
  const gamePositions = lineup.map((lineup) => lineup.position)

  return calculateSalary(lineup) <= 45000 &&
    determineCorrectNumberPlayers(lineup.map((lineup) => lineup.teamId), 2) &&
    determineCorrectNumberPlayers(lineup.map((lineup) => lineup.gameId), 3) &&
    getOccurrence(gamePositions, 'OF') === 3 &&
    getOccurrence(gamePositions, 'P') === 1 &&
    getOccurrence(gamePositions, 'C') === 1 &&
    getOccurrence(gamePositions, '1B') === 1 &&
    getOccurrence(gamePositions, '2B') === 1 &&
    getOccurrence(gamePositions, '3B') === 1 &&
    getOccurrence(gamePositions, 'SS') === 1
  // Calling getOccurrence a lot... cleaner way?
}

const calculateSalary = (lineup) => {
  return lineup.map((lineup) => lineup.salary).reduce((total, salary) => total + salary, 0)
}

const determineCorrectNumberPlayers = (players, max) => {
  for (let i = 0; i < players.length; i++) {
    if (getOccurrence(players, players[i]) > max) {
      return false
    }
  }

  return true
}

const getOccurrence = (array, value) => {
  return array.filter((v) => (v === value)).length
}

module.exports = validateLineup
