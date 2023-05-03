const { Translate } = require("@google-cloud/translate").v2;
const fs = require("fs");

require("dotenv").config();

const projectId = process.env.PROJECT_ID;

// Instantiates a client
const translate = new Translate({ projectId });

const inputPath = "./assets/i18n/en.json";

const interpolatedDataRegex = /{{.*?}}/g;

async function translateService(targetLanguage) {
  // load the input file
  const inputData = await fs.promises.readFile(inputPath, "utf-8");

  // Parse the input JSON data
  const inputObject = JSON.parse(inputData);

  // Translate each value to the target language
  for (const [key, value] of Object.entries(inputObject)) {
    // Remove any interpolated data from the value
    if (typeof value === "string") {
      const valueWithoutInterpolatedData = value.replace(
        interpolatedDataRegex,
        ""
      );

      const [translation] = await translate.translate(
        valueWithoutInterpolatedData,
        targetLanguage
      );

      // Replace the original value with the translated value
      inputObject[key] = translation;
    } else {
      for (const [ke, val] of Object.entries(value)) {
        const valueWithoutInterpolatedData = val.replace(
          interpolatedDataRegex,
          ""
        );

        const [translation] = await translate.translate(
          valueWithoutInterpolatedData,
          targetLanguage
        );

        // Replace the original value with the translated value
        inputObject[key][ke] = translation;
      }
    }
  }

  // Save the translated data to a new file
  const outputData = JSON.stringify(inputObject, null, 2);
  await fs.promises.writeFile(
    `./assets/i18n/${targetLanguage}.json`,
    outputData
  );

  console.log(
    `Translation complete. Output saved to ./assets/i18n/${targetLanguage}.json`
  );
}

module.exports = translateService;
