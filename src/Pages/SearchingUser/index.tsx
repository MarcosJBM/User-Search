import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";

const SearchingUser = () => {
  const [userName, setUserName] = useState<string>("");

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    alert(`Welcome: ${userName}`);
  }

  return (
    <div id='searching-user-page'>
      <header>
        <h1>Search for a User</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <input
            type='text'
            value={userName}
            onChange={event => setUserName(event.target.value)}
          />
        </fieldset>
        <button type='submit'>Pesquisar</button>
      </form>
      <Link to='user-informations'>Go to informations of the user.</Link>
    </div>
  );
};

export default SearchingUser;
