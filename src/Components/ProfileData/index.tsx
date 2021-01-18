import React from "react";

import { UserProps } from "../../@types";

import {
  Container,
  Flex,
  Avatar,
  Row,
  PeopleIcon,
  Column,
  CompanyIcon,
  LocationIcon,
  EmailIcon,
  BlogIcon,
} from "./styles";

export const ProfileData = (props: UserProps) => {
  return (
    <Container>
      <Flex>
        <Avatar src={props.avatar_url} alt={props.name} />

        <div>
          <h1>{props.name}</h1>
          <h2>{props.login}</h2>
        </div>
      </Flex>

      <Row>
        <li>
          <PeopleIcon />
          <b>{props.followers}</b>
          <span>followers</span>
          <span>·</span>
        </li>
        <li>
          <b>{props.following}</b>
          <span>following</span>
        </li>
      </Row>

      <Column>
        {props.location && (
          <li>
            <LocationIcon />
            <span>{props.location}</span>
          </li>
        )}
        {props.company && (
          <li>
            <CompanyIcon />
            <span>{props.company}</span>
          </li>
        )}
        {props.email && (
          <li>
            <EmailIcon />
            <span>{props.email}</span>
          </li>
        )}
        {props.blog && (
          <li>
            <BlogIcon />
            <span>{props.blog}</span>
          </li>
        )}
      </Column>
    </Container>
  );
};
