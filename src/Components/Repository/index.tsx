import React from "react";

import { RepositoriesProps } from "./types";

import "../../Styles/Components/Repository/styles.css";

import { GitForkIcon, RepoIcon, StarIcon } from "@primer/octicons-react";

export const Repository = (props: RepositoriesProps) => {
  const RepositoryHasStars = () => {
    const hasStars =
      props.stargazers_count > 0 ? (
        <p id='stars'>
          <StarIcon size={16} className='icon-repository' />
          <span>{props.stargazers_count}</span>
        </p>
      ) : null;

    return hasStars;
  };

  const RepositoryHasForks = () => {
    const hasForks =
      props.forks_count > 0 ? (
        <p id='forks'>
          <GitForkIcon size={16} className='icon-repository' />
          <span>{props.forks_count}</span>
        </p>
      ) : null;

    return hasForks;
  };

  return (
    <div id='repository'>
      <a href={props.html_url}>
        <span>
          <RepoIcon size={16} className='icon-repository' />
          {props.name}
        </span>
      </a>
      <p id='description'>{props.description}</p>
      <div id='language-and-stars'>
        <p id='language'>{props.language}</p>
        <RepositoryHasStars />
        <RepositoryHasForks />
      </div>
    </div>
  );
};
