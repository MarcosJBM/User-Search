import React from 'react';
import { Link } from 'react-router-dom';

const searchUsers = () => {
  return (
    <div>
      <header>
        <h1>Search for a User</h1>
      </header>
      <form>
        <fieldset>
          <input type="text" />
        </fieldset>
      </form>
      <Link to="user-informations">Go to informations of the user.</Link>
    </div>
  );
};

export default searchUsers;
