const validateLineup = (lineup) => {
  const positions = lineup.map((lineup) => lineup.position)
  const singlePositions = ['P', 'C', '1B', '2B', '3B', 'SS']

  return calculateSalary(lineup) <= 45000 &&
    evalTotalPlayers(lineup.map((lineup) => lineup.teamId), 2) &&
    evalTotalPlayers(lineup.map((lineup) => lineup.gameId), 3) &&
    evalSinglePositions(positions, singlePositions) &&
    getOccurrence(positions, 'OF') === 3
}

const calculateSalary = (lineup) => lineup.map((lineup) => lineup.salary)
  .reduce((total, salary) => total + salary, 0)

const evalTotalPlayers = (players, max) => {
  for (let i = 0; i < players.length; i++) {
    if (getOccurrence(players, players[i]) > max) {
      return false
    }
  }

  return true
}

const evalSinglePositions = (positions, requiredPositions) => {
  for (let i = 0; i < requiredPositions.length; i++) {
    if (getOccurrence(positions, requiredPositions[i]) !== 1) {
      return false
    }
  }

  return true
}

const getOccurrence = (arr, vals) => arr.filter((v) => (v === vals)).length

module.exports = validateLineup
