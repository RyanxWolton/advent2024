const { getInput } = require("../helpers")

const input = getInput('./day4/data.txt')
const matcher = new RegExp(/(?=(XMAS|SAMX))/g)
const lines = input.split('\n')
const n = lines.length
// const columns = new Array(n).fill('')
const diagonalsTopLeft = []
const diagonalsTopRight = []
// for (let i = 0; i < n; i++) {
//   for (const line of lines) {
//     columns[i] = `${columns[i]}${line[i]}`
//   }
// }
// first top half diagonals, left to right and right to left
for (let startCol = 0; startCol < n; startCol++) {
  let topLeftDiagonal = []
  let row = 0, col = startCol
  while (row < n && col < n) {
    topLeftDiagonal.push(lines[row][col])
      row++
      col++
  }
  diagonalsTopLeft.push(topLeftDiagonal.join(''))
  let topRightDiagonal = []
  let row2 = 0, col2 = startCol
  while (row2 < n && col2 < n) {
    topRightDiagonal.push(lines[row2][col2])
    row2++
    col2--
  }
  diagonalsTopRight.push(topRightDiagonal.join(''))
}
// bottom half diagonals, , left to right and right to left
for (let startRow = 1; startRow < n; startRow++) {
  let topLeftDiagonal = []
  let row = startRow, col = 0
  while (row < n && col < n) {
    topLeftDiagonal.push(lines[row][col])
      row++
      col++
  }
  diagonalsTopLeft.push(topLeftDiagonal.join(''))
  let topRightDiagonal = []
  let row2 = startRow, col2 = n - 1
  while (row2 < n && col2 < n) {
    topRightDiagonal.push(lines[row2][col2])
    row2++
    col2--
  }
  diagonalsTopRight.push(topRightDiagonal.join(''))
}
// const horizontalMatches = [...input.matchAll(matcher)].length
// const verticalMatches = [...columns.join(' ').matchAll(matcher)].length
const topLeftDiagonalMatches = [...diagonalsTopLeft.join(' ').matchAll(matcher)].length
const topRightDiagonalMatches = [...diagonalsTopRight.join(' ').matchAll(matcher)].length
console.log(horizontalMatches + verticalMatches + topLeftDiagonalMatches + topRightDiagonalMatches)