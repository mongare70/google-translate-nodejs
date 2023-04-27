# Google Cloud Translate

- This is a simple express.js implementation of Google's _Cloud Translation API Client Library_ for Node.js

### Installation

- Clone the repository `git clone git@github.com:mongare70/google-translate-nodejs.git`
- Setup your Cloud Translation API configs via https://cloud.google.com/translate/docs/setup
- Run `npm install` to install all dependencies
- Run `npm run dev`

### API Endpoints

| HTTP Verbs | Endpoints  | Action                                        |
| ---------- | ---------- | --------------------------------------------- |
| GET        | /          | To health check                               |
| POST       | /translate | Translate `text` in Body to `lang` in Headers |

### Authors

- [Hillary Mongare](https://github.com/mongare70)
