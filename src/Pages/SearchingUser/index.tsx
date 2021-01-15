import React, { createRef, SyntheticEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Container, SearchForm, Button } from "./styles";

const SearchingUser = () => {
  const inputRef = createRef<HTMLInputElement>();

  const [userName, setUserName] = useState<string>("");

  const history = useHistory();

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    if (userName === "") {
      return alert("Informe um nome de usuário");
    }

    localStorage.setItem("userName", userName);
    history.push("/user-informations");
  }

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit}>
        <input
          type='text'
          value={userName}
          onChange={event => setUserName(event.target.value)}
          ref={inputRef}
          placeholder='Procure por um usuário'
        />
        <Button type='submit'>Pesquisar</Button>
      </SearchForm>
    </Container>
  );
};

export default SearchingUser;
