import React, { useEffect, useState } from "react";

import { ProfileData } from "../../components/ProfileData";
import { RepoCard } from "../../components/RepoCard";

import { Data } from "../../@types";

import { Container, Main, LeftSide, RightSide, Repos } from "./styles";

const UserData = () => {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    const userName = localStorage.getItem("userName");

    if (userName !== null) {
      Promise.all([
        fetch(`https://api.github.com/users/${userName}`),
        fetch(`https://api.github.com/users/${userName}/repos`),
      ]).then(async responses => {
        const [userResponse, reposResponse] = responses;

        if (userResponse.status === 404) {
          setData({ error: "User not Found" });
          return;
        }

        const user = await userResponse.json();
        const repos = await reposResponse.json();

        setData({ user, repos });
      });
    }
  }, []);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.user || !data.repos) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            name={data.user.name}
            login={data.user.login}
            avatar_url={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
          />
        </LeftSide>
        <RightSide>
          <Repos>
            <h2>Random Repos</h2>
            <div>
              {data.repos.map(repo => (
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
