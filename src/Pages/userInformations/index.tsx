import React, { useEffect, useState } from "react";

import api from "../../Services/api";
import { UserProps } from "./userProps";

import "../../Styles/Pages/UserInformations/styles.css";

const UserInformations = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  useEffect(() => {
    const userName = localStorage.getItem("userName"); //Pega o nome do usuário

    if (userName !== null) {
      api.get(`${userName}`).then(response => {
        setUser(response.data);
      });
    }
  }, []);

  return (
    <div id='user-informations-page'>
      <main>
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
      </main>
    </div>
  );
};

export default UserInformations;
