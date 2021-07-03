import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SingleTerm from "./SingleTerm";

const ResultTerms = () => {
  const { state } = useLocation();
  const searchTerm = state.toLowerCase();
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

  return !terms ? (
    <p>loading...</p>
  ) : (
    <div className="terms">
      {terms
        .filter((item) => item.term.toLowerCase().includes(searchTerm))
        .map((term, index) => (
          <SingleTerm key={index} term={term} />
        ))}
    </div>
  );
};

export default ResultTerms;
