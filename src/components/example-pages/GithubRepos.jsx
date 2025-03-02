import React from "react";

// {"message":"API rate limit exceeded for XXXXX. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)","documentation_url":"https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting"}

export const GithubRepos = async ({ username = "PedroMarianoAlmeida" }) => {
  try {
    const data = await fetch(`https://api.github.com/users/${username}/repos`);
    const res = await data.json();
    return <p>{JSON.stringify(res)}</p>; // I reach the limit and lot the response format, treat to keep the name and html_url
  } catch {
    return (
      <p>
        Error on <b>GithubRepos</b> component
      </p>
    );
  }
};
