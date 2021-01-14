import styled from "styled-components";

export const Container = styled.div`
  max-width: 240px;
  margin: 256px auto;
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    padding: 6px 12px;

    border: 2px solid black;
    border-radius: 4px;
  }
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 10px;
  border-radius: 4px;
  padding: 7px 12px;

  background: #151515;
  color: #fff;
  font-size: 16px;

  border: none;

  @media (min-width: 768px) {
    cursor: pointer;
  }
`;
