const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes')


yargs.version('1.1.0')
//Add Command
yargs.command({
  command: 'add',
  describe: 'Adds a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
})
//Remove Command
yargs.command({
  command: 'remove',
  describe: 'Removes a note',
  builder: {
    title: {
      describe: 'Note to be removed',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

//List Command
yargs.command({
  command: 'list',
  describe: 'Lists all notes',
  handler() {
    notes.listNotes()
  }
})

//Read Command
yargs.command({
  command: 'read',
  describe: 'Read notes',
  builder: {
    title: {
      describe: 'Note to be read',
      demandOption: 'true',
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
})
yargs.parse()
// console.log(yargs.argv)

// const command = process.argv[2]

// if(command === 'add') {
//   console.log('Adding Note...')
// } else if (command === 'remove') {
//   console.log('Removing Note...')
// }