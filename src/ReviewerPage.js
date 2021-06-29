import React, { useState, useEffect } from "react";
import Login from "./Login";
import AddNewTerm from "./AddNewTerm";
import Terms from "./Terms";
import SearchButton from "./SearchButton";
import ResourcesList from "./ResourcesList";
import AddNewTermBtn from "./AddNewTermBtn";
import DeleteTerm from "./DeleteTerm";
import ResourceAdd from "./ResourceAdd";

const ReviewerPage = () => {
  const [search, setSearch] = useState("");
  const [terms, setTerms] = useState([]);
  const [token, setToken] = useState("");
  const [showBtn, setShowBtn] = useState(true);
  const [open, setOpen] = useState(true);
  // const [res, setRes] = useState([]);

  const handleLoginClick = () => {
    setShowBtn((showBtn) => !showBtn);
  };

  // const [password, setPassword] = useState("");
  useEffect(() => {
    fetch("https://wm2-glossary.herokuapp.com/api/terms/")
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
    <div className="App">
      <AddNewTermBtn handleLoginClick={handleLoginClick} />
      <Login setToken={setToken} open={open} setOpen={setOpen} />
      <AddNewTerm token={token} showBtn={showBtn} />
      <SearchButton search={search} setSearch={setSearch} />
      <Terms terms={terms} search={search} />
      <ResourcesList token={token} />
      <ResourceAdd token={token} />
      <DeleteTerm token={token} />
    </div>
  );
};

export default ReviewerPage;
