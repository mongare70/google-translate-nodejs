require("dotenv").config();

const projectId = process.env.PROJECT_ID;
const { Translate } = require("@google-cloud/translate").v2;

// Instantiates a client
const translate = new Translate({ projectId });

async function TranslateService(text, lang) {
  const [translation] = await translate.translate(text, lang);
  return translation;
}

module.exports = TranslateService;
