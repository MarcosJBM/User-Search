import React from "react";

import { RepositoriesProps } from "./types";

export const Repository = (props: RepositoriesProps) => {
  return (
    <div id='repository'>
      <a href={props.html_url}>
        <span>{props.name}</span>
      </a>
      <p>{props.description}</p>
      <p>{props.language}</p>
    </div>
  );
};
