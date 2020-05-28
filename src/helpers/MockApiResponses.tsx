export const MockResponseOne = {
  text: "I love pizza!",
  results: {
    toxic: {
      prediction: false,
      probability: 0.37071,
    },
    severe_toxic: {
      prediction: false,
      probability: 0.10329,
    },
    obscene: {
      prediction: false,
      probability: 0.50152,
    },
    threat: {
      prediction: false,
      probability: 0.13545,
    },
    insult: {
      prediction: false,
      probability: 0.50747,
    },
    identity_hate: {
      prediction: false,
      probability: 0.90285,
    },
  },
}

export const MockResponseTwo = {
  text: "I think the color brown.",
  results: {
    toxic: {
      prediction: true,
      probability: 0.39828,
    },
    severe_toxic: {
      prediction: false,
      probability: 0.62829,
    },
    obscene: {
      prediction: false,
      probability: 0.83187,
    },
    threat: {
      prediction: false,
      probability: 0.47269,
    },
    insult: {
      prediction: false,
      probability: 0.88975,
    },
    identity_hate: {
      prediction: false,
      probability: 0.5742,
    },
  },
}

export const MockResponseThree = {
  text: "I hate the color brown.",
  results: {
    toxic: {
      prediction: true,
      probability: 0.79828,
    },
    severe_toxic: {
      prediction: false,
      probability: 0.32829,
    },
    obscene: {
      prediction: false,
      probability: 0.93187,
    },
    threat: {
      prediction: false,
      probability: 0.67269,
    },
    insult: {
      prediction: false,
      probability: 0.38975,
    },
    identity_hate: {
      prediction: false,
      probability: 0.2742,
    },
  },
}
