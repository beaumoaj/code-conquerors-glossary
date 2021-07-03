import React from "react";

const SingleTerm = ({ term }) => {
  return (
    <div>
      <h1>{term.term}</h1>
      <p>{term.definition}</p>
      <ul>
        {term.resources && (
          <a href={term.resources} target="_blank" rel="noreferrer">
            Further Reading
          </a>
        )}
      </ul>
    </div>
  );
};
export default SingleTerm;

// {
  /* <ul>
  {term.resources.map((resource) => {
    return <li key={resource.resid}>{embed(resource)}</li>;
  })}
</ul>; */
// }
