const fs = require('fs')

module.exports = {
  getInput: (filePath) => {
    const data = fs.readFileSync(filePath)
    return data.toString()
  }
} 