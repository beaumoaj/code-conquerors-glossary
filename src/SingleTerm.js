import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

const getTerm = (termid) => {
  return {
    termid: 1,
    term: "boolean",
    definition:
      "A type with two values, true or false used in boolean expressions.",
    resources: [
      {
        resid: 1,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference",
        type: "web",
        language: "javascript",
      },
      {
        resid: 2,
        link: "https://www.w3schools.com/js/js_booleans.asp",
        type: "web",
        language: "javascript",
      },
      {
        resid: 3,
        link: "https://youtu.be/B4ZCFdrBmbE",
        type: "video",
        language: "javascript",
      },
    ],
  };
};

const SingleTerm = ({ termid }) => {
  const term = getTerm(termid);

  function embed(resource) {
    let item;
    if (resource.type === "web") {
      item = <li key={resource.resid}>{resource.link}</li>;
    } else {
      item = <YoutubeEmbed embedUrl={resource.link} />;
    }

    return item;
  }

  return (
    <div>
      <h1>{term.term}</h1>
      <p>{term.definition}</p>
      <ul>
        {term.resources.map((resource) => {
          return <li key={resource.resid}>{embed(resource)}</li>;
        })}
      </ul>
    </div>
  );
};

export default SingleTerm;
