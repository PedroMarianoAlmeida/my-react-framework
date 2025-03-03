import React, { useState } from "react";
import { GithubReposClientWay } from "./GithubRepoClientWay";

export const GithubUserReposFinder = () => {
  const [user, setUser] = useState("");
  // Instead of this state, the developer can use Context, Redux, or any other client side way to manage state in react
  return (
    <section>
      <h3>GithubUserReposFinder</h3>
      <input
        type="text"
        onChange={(e) => setUser(e.target.value)}
        value={user}
      />
      <GithubReposClientWay username={user} />
    </section>
  );
};
