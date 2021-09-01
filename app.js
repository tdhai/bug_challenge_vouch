const Replacer = require("./utils/Replacer");
const SaveJSON = require("./utils/SaveJSON");
const TextLoader = require("./utils/TextLoader");
const JSONLoader = require("./utils/JSONLoader");

module.exports = (sample_text, sample_data, result_path) => {
  console.log("---input---", { sample_text, sample_data, result_path });

  const data = require(sample_data);
  console.log("---data---", data);

  const sample_string = TextLoader(sample_text);
  console.log("----sample_string--", sample_string);

  const processed_string = Replacer(sample_string, data);
  console.log("---processed_string---", processed_string);

  const save_path = __dirname + "/" + result_path;
  console.log("---save_path---", save_path);

  //   SaveJSON(save_path, `{ "processed": "${processed_string}" }`); //bug
  const data_saved = JSON.stringify({ processed: processed_string });
  console.log("---data_saved---", data_saved);
  SaveJSON(save_path, data_saved);

  const processed_json = JSONLoader(save_path);
  console.log("---processed_json---", processed_json);
  return processed_json;
};
