const yargs = require("yargs");
const translateService = require("./translate");

// Create add command
yargs.command({
  command: "translate",
  describe: "Translate `en.json` file to `[lang].json` file",
  builder: {
    lang: {
      describe: "language code",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    translateService(argv.lang).catch((error) => console.log(error));
  },
});

yargs.parse();
