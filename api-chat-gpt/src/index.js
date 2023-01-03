const { Configuration, OpenAIApi } = require("openai");
const apiKey = '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';

const configuration = new Configuration({
  apiKey: apiKey,
});

const openai = new OpenAIApi(configuration);

const runApi = async () => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Apa itu open ai?",
    max_tokens: 7,
    temperature: 0,
  });

  console.log(response.data.choices[0]);
}

runApi();