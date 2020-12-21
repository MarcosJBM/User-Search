import React, { useEffect, useState } from "react";

import api from "../../Services/api";
import { UserProps } from "./userProps";

const UserInformations = () => {
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    const userName = localStorage.getItem("userName"); //Pega o nome do usuário

    if (userName !== null) {
      api.get(`${userName}`).then(response => {
        setUser(response.data);
      });
    }
  }, []);
  return (
    <div>
      <h1>User Informations</h1>
      <img src={user?.avatar_url} alt={user?.name} />
      <br />
      <span>{user?.name}</span>
      <br />
      <span>{user?.login}</span>
      <br />
      <div>{user?.bio}</div>
      <br />
      <div id='followingAndFollowers'>
        <p>{user?.followers}</p>
        <p>{user?.following}</p>
      </div>
    </div>
  );
};

export default UserInformations;
