const fs = require('fs')

const dataBuffer = fs.readFileSync('data.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = 'Kelsey'
data.age = 31

const userJSON = JSON.stringify(data)

fs.writeFileSync('data.json', userJSON)