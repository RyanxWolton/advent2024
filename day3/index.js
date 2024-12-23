const { getInput } = require("../helpers")

const input = getInput('./day3/data.txt')
const dos = input.split('do()')
const dosWithoutDonts = []
for (const d of dos) {
  const withoutDont = d.split("don't()")[0]
  dosWithoutDonts.push(withoutDont)
}
const filteredInput = dosWithoutDonts.join('')
const expressions = [...filteredInput.match(/(\bmul)\(+[0-9]*,+[0-9]*\)/g)]
 
let total = 0
for (const exp of expressions) {
  const [a, b] = exp.replace('mul(', '').replace(')', '').split(',')
  total += mul(a, b)
}

console.log(total)

function mul(a, b) {
  return a * b
}