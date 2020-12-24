import React, { useEffect, useState } from "react";

import { Repository } from "../../Components/Repository";

import { UserProps } from "./types";
import { RepositoriesProps } from "../../Components/Repository/types";

import api from "../../Services/api";

import "../../Styles/Pages/UserInformations/styles.css";
import {
  LinkIcon,
  LocationIcon,
  OrganizationIcon,
  PeopleIcon,
} from "@primer/octicons-react";

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

  const HasCompany = () => {
    const userHasCompany =
      user?.company !== null ? (
        <p>
          <OrganizationIcon size={16} className='icon' />
          {user?.company}
        </p>
      ) : null;

    return userHasCompany;
  };

  const HasBlog = () => {
    const userHasBlog =
      user?.blog !== "" ? (
        <p>
          <LinkIcon size={16} className='icon' />
          {user?.blog}
        </p>
      ) : null;

    return userHasBlog;
  };

  const HasLocation = () => {
    const userHasLocation =
      user?.location !== null ? (
        <p>
          <LocationIcon size={16} className='icon' />
          {user?.location}
        </p>
      ) : null;

    return userHasLocation;
  };

  return (
    <div id='user-informations-page'>
      <div id='user-informations'>
        <img src={user?.avatar_url} alt={user?.name} />
        <h2>{user?.name}</h2>
        <h4>{user?.login}</h4>
        <p>{user?.bio}</p>

        <a href={user?.html_url}>Visitar Perfil</a>

        <div id='following-and-followers'>
          <p>
            <PeopleIcon size={16} className='icon' />
            <span>{user?.followers}</span>
            followers
          </p>
          <p>
            <span>{user?.following}</span> following
          </p>
        </div>
        <div id='has-something'>
          <HasLocation />
          <HasCompany />
          <HasBlog />
        </div>
      </div>
      <div id='user-repositories'>
        {repositories.map(repo => (
          <Repository
            key={repo.html_url.toString()}
            html_url={repo.html_url}
            name={repo.name}
            description={repo.description}
            language={repo.language}
            stargazers_count={repo.stargazers_count}
            forks_count={repo.forks_count}
          />
        ))}
      </div>
    </div>
  );
};

export default UserInformations;
