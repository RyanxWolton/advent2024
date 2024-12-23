const { getInput } = require("../helpers")

const getDifferenceScore = (left, right) => {
  left.sort()
  right.sort()
  let diff = 0
  for (let i = 0; i < left.length; i++) {
    diff += Math.abs(left[i] - right[i])
  }
  return diff
}

const getSimilarityScore = (left, right) => {
  let score = 0
  for (let val of left) {
    const rightFinds = right.filter(rightVal => rightVal === val)
    score += rightFinds.length * val
  }
  return score
}

const input = getInput('./day1/data.txt')
const lines = input.split('\n')
const left = []
const right = []
for (let line of lines) {
  const parts = line.split('   ')
  left.push(parts[0])
  right.push(parts[1])
}

// console.log(getDifferenceScore(left, right))
console.log(getSimilarityScore(left, right))