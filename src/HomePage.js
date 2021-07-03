import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import terms from "./Data";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [terms, setTerms] = useState([]);
  useEffect(() => {
    fetch("https://wm2-glossary.herokuapp.com/api/terms")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTerms(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <form >
        <input
          type="text"
          placeholder="Search Terms Here..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <Link to={{ pathname: "/ResultTerms", state: searchTerm }}>
          <button type="submit">Submit</button>
        </Link>
      </form>

      {terms
        .filter((term) => {
          if (searchTerm === "") {
            return term;
          } else if (
            term.term.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return term;
          }
        })
        .map((term) => {
          return (
            <div key={term.id}>
              <h4>{term.term}</h4>
               <p>{term.definition}</p>
              {term.resources && (
                <a href={term.resources} target="_blank" rel="noreferrer">
                  Further Reading
                </a> )}
            </div>
          );
        })}
    </div>
  );
};

export default HomePage;
