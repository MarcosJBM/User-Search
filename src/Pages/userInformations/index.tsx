import React, { useEffect, useState } from "react";

import api from "../../Services/api";

import { UserProps, RepositoriesProps } from "./types";

import "../../Styles/Pages/UserInformations/styles.css";
import { Repository } from "../../Components/Repository";

const UserInformations = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [repositories, setRepositories] = useState<RepositoriesProps[]>([]);

  useEffect(() => {
    const userName = localStorage.getItem("userName"); //Pega o nome do usuário

    if (userName !== null) {
      api.get(`${userName}`).then(response => {
        setUser(response.data);
      });

      api.get(`${userName}/repos`).then(response => {
        setRepositories(response.data);
      });
    }
  }, []);

  return (
    <div id='user-informations-page'>
      <div id='user-informations'>
        <a href={user?.html_url}>
          <img src={user?.avatar_url} alt={user?.name} />
        </a>

        <h2>{user?.name}</h2>
        <h4>{user?.login}</h4>

        <p>{user?.bio}</p>
        <div id='following-and-followers'>
          <p>{user?.followers} followers</p>

          <p>{user?.following} following</p>
        </div>
        <p>{user?.location}</p>
      </div>
      <div id='user-repositories'>
        {repositories.map(repo => (
          <Repository
            key={repo.html_url.toString()}
            stargazers_count={repo.stargazers_count}
            html_url={repo.html_url}
            name={repo.name}
            description={repo.description}
            language={repo.language}
          />
        ))}
      </div>
    </div>
  );
};

export default UserInformations;
