import React from "react";
import { Link } from "react-router-dom";

import { RepoProps } from "../../@types";

import {
  Container,
  TopSide,
  RepoBook,
  BotSide,
  RepoStar,
  RepoFork,
} from "./styles";

export const RepoCard = (props: RepoProps) => {
  const languageClass = props.language
    ? props.language.toLocaleLowerCase()
    : "";

  return (
    <Container>
      <TopSide>
        <header>
          <RepoBook />
          <Link to={""}>{props.name}</Link>
        </header>
        <p>{props.description}</p>
      </TopSide>
      <BotSide>
        <ul>
          <li>
            <div className={`language ${languageClass}`} />
            <span>{props.language}</span>
          </li>
          <li>
            <RepoStar />
            <span>{props.stargazers_count}</span>
          </li>
          <li>
            <RepoFork />
            <span>{props.forks_count}</span>
          </li>
        </ul>
      </BotSide>
    </Container>
  );
};
