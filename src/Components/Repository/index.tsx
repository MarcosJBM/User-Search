import React from "react";

import { RepositoriesProps } from "./types";

import "../../Styles/Components/Repository/styles.css";

import { RepoIcon } from "@primer/octicons-react";

export const Repository = (props: RepositoriesProps) => {
  const hasStars =
    props.stargazers_count > 0 ? (
      <p id='stars'>{props.stargazers_count}</p>
    ) : (
      ""
    );

  return (
    <div id='repository'>
      <a href={props.html_url}>
        <span>
          <RepoIcon size={16} className='icon' />
          {props.name}
        </span>
      </a>
      <p id='description'>{props.description}</p>
      <div id='language-and-stars'>
        <p id='language'>{props.language}</p>
        {hasStars}
      </div>
    </div>
  );
};
