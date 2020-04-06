const validateLineup = (lineup) => {
  const positions = lineup.map((lineup) => lineup.position)
  const singlePositions = ['P', 'C', '1B', '2B', '3B', 'SS']
  const multiPositions = ['OF']

  return calculateSalary(lineup) <= 45000 &&
    evalPlayers(lineup.map((lineup) => lineup.teamId), 2) &&
    evalPlayers(lineup.map((lineup) => lineup.gameId), 3) &&
    evalPositions(positions, singlePositions, 1) &&
    evalPositions(positions, multiPositions, 3)
}

const calculateSalary = (lineup) => lineup.map((lineup) => lineup.salary).reduce((total, salary) => total + salary, 0)

const evalPlayers = (players, max) => {
  for (let i = 0; i < players.length; i++) {
    if (getOccurrence(players, players[i]) > max) {
      return false
    }
  }

  return true
}

const evalPositions = (positions, requiredPositions, max) => {
  for (let i = 0; i < requiredPositions.length; i++) {
    if (getOccurrence(positions, requiredPositions[i]) !== max) {
      return false
    }
  }

  return true
}

const getOccurrence = (arr, vals) => arr.filter((val) => (val === vals)).length

module.exports = validateLineup
