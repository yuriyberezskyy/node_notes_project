const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new value",
  handler: function () {
    console.log("Adding a new note");
  },
});

yargs.command({
  command: "remove",
  describe: "Remove the note",
  handler: function () {
    console.log("Removing the note");
  },
});

yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
    console.log("Listing out all notes");
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading the note");
  },
});
// add, remove, read, list

console.log(yargs.argv);
