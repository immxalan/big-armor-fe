import React from "react";
import NavBar from "../components/NavBar";

function API() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <h1>The API uses FastAPI for documentation</h1>
        <ul>
          <li>
            uvicorn main:app will run the API locally. uvicorn can be installed
            via pip.
          </li>
          <li>
            going to the url for the api with /docs will allow one to see the
            documentation and test requests.
          </li>
        </ul>
        <p>
          It is currently deployed through Google's Cloud Services: Google Cloud
          Storage and App-Engine: documentation
        </p>
        <h2>Preprocessing</h2>
        <p>
          The API accepts string based requests and preprocesses the text before
          running it through the predictive model. During preprocessing, the
          following are removed:
        </p>
        <ul>
          <li>Newline characters</li>
          <li>Return characters</li>
          <li>Leading and trailing white spaces</li>
          <li>Usernames if indicated with the term 'User'</li>
          <li>IP addresses and user IDs</li>
          <li>Non-printable characters e.g. unicode</li>
          <p>
            Words that are disguised using characters such as * or @ are
            replaced with letters and common asterisk words are replaced with
            the appropriate word. The API also separates toxic words from
            surrounding text in case they are hidden within non-toxic content.
          </p>
        </ul>
        <h2>Making Requests</h2>
        <p>Example Request Body:</p>
        <p>"text": "I am an example string"</p>
        <h2>Model</h2>
        <p>
          The model is used to determine if the text contains toxic or offensive
          content.
        </p>
        <p>The possible labels are:</p>
        <ul>
          <li>toxic</li>
          <li>severe toxic</li>
          <li>obscene</li>
          <li>threat</li>
          <li>insult</li>
          <li>identity hate</li>
        </ul>
        <p>
          The API returns the cleaned text, all labels, True of False for each
          label, and the predicted probability of each.
        </p>
        <p>
          The current model is a Bi-directional LSTM + GRU neural network made
          with PyTorch, assuming FastText vectorization. Considerable
          preprocessing is performed on the text before vectorization. The
          metrics used in evaluating this model are F1 and ROC-AUC scores.
        </p>
        <p>
          F1 score is defined as the harmonic mean between precision and recall
          on a scale of 0 to 1. Recall demonstrates how effectively this model
          identifies all relevant instances of toxicity. Precision demonstrates
          how effectively the model returns only these relevant instances.
        </p>
        <p>
          The AUC score represents the measure of separability, in this case,
          distinguishing between toxic and non-toxic content. Also on a scale of
          0 to 1, a high AUC score indicates the model successfully classifies
          toxic vs non-toxic. The ROC represents the probability curve.
        </p>
        <p>
          The F1 score for this model is 0.753 and the ROC-AUC score is 0.987
        </p>
        <h2>Deploy</h2>
        <ol>
          <li>Activate a cloud shell</li>
          <li>Clone the API repository</li>
          <li>Set current working directory to API</li>
          <li>Create app on Google Cloud Platform(gcloud app create)</li>
          <li>Deploy API to App Engine (gcloud app deploy app.yaml)</li>
        </ol>
      </div>
    </div>
  );
}

export default API;
