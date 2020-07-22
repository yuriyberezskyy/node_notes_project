const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes...";
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((element) => {
    return element.title === title;
  });
  console.log(note.body);
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
  } else {
    console.log("Note title taken");
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title !== title);
  if (notes.length !== duplicateNotes.length) {
    saveNotes(duplicateNotes);
    console.log(chalk.green.inverse("Note was removed"));
  } else {
    console.log(chalk.red.inverse("Note wasn't found"));
  }
};

const listNotes = () => {
  console.log(chalk.inverse("Your notes"));
  const notes = loadNotes();
  for (let i in notes) {
    console.log(notes[i].title);
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
