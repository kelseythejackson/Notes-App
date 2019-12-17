//Loads in the node modules
const fs = require('fs')
const chalk = require('chalk')

// Adds a note
const addNote = (title, body) => {
  const notes = loadNotes()
  // Checks if a note title already exists
  const duplicateNote = notes.find(note => note.title === title)

  debugger
  // If a note title already exists, it won't save the note and will notify the user that the title is already taken
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('Note added'))
  } else {
    console.log(chalk.red.inverse('That note title already exists'))
  }
}

// Will stringify to JSON the notes and write them to a file
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}


const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title)

  if (notes > notesToKeep) {
    console.log(chalk.black.bgGreen('Note removed'))
  } else {
    console.log(chalk.black.bgRed('No note found'))
  }

  saveNotes(notesToKeep)
}

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green.inverse('Your notes'))
  notes.forEach(note => {
    console.log(note.title)
  });
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find(note => note.title === title)

  if(note) {
    console.log(chalk.green.inverse(note.title))
    console.log(note.body)
  } else {
    console.log(chalk.red.inverse('There is no note by this title'))
  }
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
}