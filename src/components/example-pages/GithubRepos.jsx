import React from "react";

// This component doesn't work on client side
export const GithubRepos = async ({ username = "PedroMarianoAlmeida" }) => {
  if (username === "") return <p>Add username</p>;
  try {
    const data = await fetch(`https://api.github.com/users/${username}/repos`);
    const res = await data.json();

    if (Array.isArray(res)) {
      return (
        <div>
          <h3>
            Repos of <b>{username}</b>
          </h3>
          <ul>
            {res.map(({ id, name, html_url }) => (
              <li key={id}>
                <a href={html_url}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
      );
    } else return <p>{res.message}</p>;
  } catch {
    return (
      <p>
        Error on <b>GithubRepos</b> component
      </p>
    );
  }
};
