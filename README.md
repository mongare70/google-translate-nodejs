# en.json to [lang_code].json script

- This is a simple script that changes the en.json file in "assets/i18n/" folder to the [lang_code].json file you desire

### Technologies used

- Google's [_Cloud Translation API Client Library_](https://www.npmjs.com/package/@google-cloud/translate) for Node.js
- [Yargs](https://www.npmjs.com/package/yargs)

### Installation

- Clone the repository `git clone git@github.com:mongare70/google-translate-nodejs.git`
- Setup your Cloud Translation API configs via https://cloud.google.com/translate/docs/setup
- Add API key in `.env` file (reference: `.env.example`)
- Run `npm install` to install all dependencies
- Run `npm start -- --lang=<language_code>`

### Authors

- [Hillary Mongare](https://github.com/mongare70)
