import styled, { css } from "styled-components";

import { GitForkIcon, RepoIcon, StarIcon } from "@primer/octicons-react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 16px;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
`;

export const TopSide = styled.div`
  > header {
    display: flex;
    align-items: center;

    > a {
      margin-left: 8px;
      font-size: 14px;
      font-weight: 600;
      color: #0366d6;
      text-decoration: none;

      &:focus,
      &:hover {
        text-decoration: underline;
      }
    }
  }

  > p {
    margin: 8px 0 16px;
    font-size: 12px;
    color: #586069;
    letter-spacing: 0.1px;
  }
`;

export const BotSide = styled.div`
  > ul {
    display: flex;
    align-items: center;

    > li {
      display: flex;
      align-items: center;
      margin-right: 16px;

      > span {
        margin-left: 5px;
        font-size: 12px;
        color: #586069;
      }
    }
  }

  .language {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;

    &.javascript {
      background: var(--javascript);
    }

    &.typescript {
      background: var(--typescript);
    }

    &.css {
      background: var(--css);
    }
  }
`;

export const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: rgb(88, 96, 105);
  flex-shrink: 0;
`;

export const RepoBook = styled(RepoIcon)`
  ${iconCSS}
`;

export const RepoFork = styled(GitForkIcon)`
  ${iconCSS}
`;

export const RepoStar = styled(StarIcon)`
  ${iconCSS}
`;
