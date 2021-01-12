import React, { useEffect, useState } from "react";

import { Repository } from "../../components/Repository";

import { UserProps, RepoProps } from "../../@types";

import api from "../../services/api";

import "../../styles/Pages/UserInformations/styles.css";
import {
  LinkIcon,
  LocationIcon,
  OrganizationIcon,
  PeopleIcon,
} from "@primer/octicons-react";

import { SiTwitter } from "react-icons/si";

const UserInformations = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [repositories, setRepositories] = useState<RepoProps[]>([]);

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

  const HasLocation = () => {
    const userHasLocation =
      user?.location !== null ? (
        <li className='detail'>
          <LocationIcon size={16} className='icon' />
          <span>{user?.location}</span>
        </li>
      ) : null;

    return userHasLocation;
  };

  const HasCompany = () => {
    const userHasCompany =
      user?.company !== null ? (
        <li className='detail'>
          <OrganizationIcon size={16} className='icon' />
          <span>{user?.company}</span>
        </li>
      ) : null;

    return userHasCompany;
  };

  const HasBlog = () => {
    const userHasBlog =
      user?.blog !== "" ? (
        <li className='detail'>
          <LinkIcon size={16} className='icon' />
          <a href={user?.blog}>{user?.blog}</a>
        </li>
      ) : null;

    return userHasBlog;
  };

  const HasTwitter = () => {
    const userHasTwitter =
      user?.twitter_username !== null ? (
        <li className='detail'>
          <SiTwitter size={16} className='icon' />
          <a href={`https://twitter.com/${user?.twitter_username}`}>
            @{user?.twitter_username}
          </a>
        </li>
      ) : null;

    return userHasTwitter;
  };

  return (
    <div id='user-informations-page'>
      <div id='user-informations'>
        <img src={user?.avatar_url} alt={user?.name} />
        <h2>{user?.name}</h2>
        <h4>{user?.login}</h4>
        <p>{user?.bio}</p>

        <a id='user-github' href={user?.html_url}>
          Visitar Perfil
        </a>

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
        <div id='user-details'>
          <ul>
            <HasLocation />
            <HasCompany />
            <HasBlog />
            <HasTwitter />
          </ul>
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
