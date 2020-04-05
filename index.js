const validateLineup = (lineup) => {

  // if salary > 45.000 - FALSE
  //return calculateSalary(lineup) // Function working!

  // if calculateTeamPlayers > 2 -- FALSE
  //return calculateNumberPlayers(lineup.map((lineup) => lineup.teamId)) <= 2

  // if calculateGamePlayers > 3 -- FALSE
  //return calculateNumberPlayers(lineup.map((lineup) => lineup.gameId)) <= 3

  // MAP FOR POSITIONS
  const gamePositions = lineup.map((lineup) => lineup.position)

  console.log(gamePositions)

  const totalOF = getOccurrence(gamePositions, 'OF') // need 3
  console.log(totalOF === 3)

  const totalP = getOccurrence(gamePositions, 'P') //need 1
  console.log(totalP === 1)

  const totalC = getOccurrence(gamePositions, 'C') //need 1
  console.log(totalC === 1)

  const total1B = getOccurrence(gamePositions, '1B') //need 1
  console.log(total1B === 1)

  const total2B = getOccurrence(gamePositions, '2B') //need 1
  console.log(total2B === 1)

  const total3B = getOccurrence(gamePositions, '3B') //need 1
  console.log(total3B === 1)

  const totalSS = getOccurrence(gamePositions, 'SS') //need 1
  console.log(totalSS === 1)

  // Need one of each of these
  return checkIndividualPositions(gamePositions)
}

// This would be cleaner than seperate variables, but doesnt work....!!!!
const checkIndividualPositions = (gamePositions) => {
  const individualPositions = ['P', 'C', '1B', '2B', '3B', 'SS']

  for (let i = 0; i < individualPositions.length; i++) {
    console.log(individualPositions[i])
    console.log(getOccurrence(gamePositions, individualPositions[i]))
    console.log(getOccurrence(gamePositions, individualPositions[i]) === 1)

    return getOccurrence(gamePositions, individualPositions[i]) === 1
    // This only returns the first item...
  }
}

const calculateSalary = (lineup) => {
  return lineup.map((lineup) => lineup.salary)
    .reduce((total, salary) => total + salary, 0) < 45000
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
