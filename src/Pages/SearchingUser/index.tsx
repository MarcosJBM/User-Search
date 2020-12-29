import React, { createRef, SyntheticEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "../../Styles/Pages/SearchingUser/styles.css";

const SearchingUser = () => {
  const inputRef = createRef<HTMLInputElement>();

  const [userName, setUserName] = useState<string>("");

  const history = useHistory();

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    localStorage.setItem("userName", userName);
    history.push("/user-informations");
  }

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <div id='searching-user-page'>
      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <input
              type='text'
              value={userName}
              onChange={event => setUserName(event.target.value)}
              ref={inputRef}
              placeholder='Procure por um usuário'
            />
          </fieldset>
          <button type='submit'>Pesquisar</button>
        </form>
      </main>
    </div>
  );
};

export default SearchingUser;
