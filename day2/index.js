const { getInput } = require("../helpers")

const input = getInput('./day2/example.txt')
const reports = input.split('\n')

const isSafe = (levels) => {
  let prevDir
  for (let i = 0; i < levels.length - 1; i++) {
    const current = Number(levels[i])
    const next = Number(levels[i + 1])
    const nextDir = next > current ? 'asc' : 'desc'
    const directionChange = prevDir && prevDir !== nextDir
    if (next === current || Math.abs(current - next) > 3 || directionChange) {
      const withoutCurrent = levels.filter((el, index) => index !== i)
      
      return false
    } 
    prevDir = nextDir
  }
  return true
}

const safeReports = reports.filter(report => {
  const levels = report.split(' ')
  return isSafe(levels)
})

console.log(safeReports.length)