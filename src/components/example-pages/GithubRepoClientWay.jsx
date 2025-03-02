import React, { useEffect, useState } from "react";

export const GithubReposClientWay = ({ username = "PedroMarianoAlmeida" }) => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRepos = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const data = await response.json();

      if (Array.isArray(data)) {
        setRepos(data);
      } else {
        setError(data.message || "Unknown error");
      }
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, [username]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <session>
      <h2>Github repos in the "client way"</h2>
      <p>
        This is a sync React Component that grab data from an API on client side
      </p>
      <ul>
        {repos.map(({ id, name, html_url }) => (
          <li key={id}>
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </li>
        ))}
      </ul>
      <p>Never do that if the url has sensitive data like API KEY</p>
      <p>
        Fetch the API in the component directly is not a good practice... but I
        keep everything in the same file to keep it simple
      </p>
    </session>
  );
};
