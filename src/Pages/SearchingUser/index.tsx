import React, { SyntheticEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import "../../Styles/Pages/SearchingUser/styles.css";

const SearchingUser = () => {
  const [userName, setUserName] = useState<string>("");

  const history = useHistory();

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    localStorage.setItem("userName", userName);
    history.push("/user-informations");
  }

  return (
    <div id='searching-user-page'>
      <header>
        <h1>Search for a User</h1>
      </header>

      <main>
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
      </main>
    </div>
  );
};

export default SearchingUser;
