import React, { useEffect, useState } from "react";
import axios from "axios";

import { RepoCard } from "../../components/RepoCard";

import api from "../../services/api";

import { UserProps, RepoProps } from "../../@types";

import { Container, Main, LeftSide, RightSide, Repos } from "./styles";

const UserData = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [repos, setRepos] = useState<RepoProps[]>([]);

  useEffect(() => {
    const userName = localStorage.getItem("userName");

    if (userName !== null) {
      axios.all([api.get(`${userName}`), api.get(`${userName}/repos`)]).then(
        axios.spread((userResponse, repoResponse) => {
          setUser(userResponse.data);
          setRepos(repoResponse.data);
        })
      );
    }
  }, []);

  return (
    <Container>
      <Main>
        <LeftSide></LeftSide>
        <RightSide>
          <Repos>
            <h2>Random Repos</h2>
            <div>
              {repos.map(repo => (
                <RepoCard
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
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
};

export default UserData;
