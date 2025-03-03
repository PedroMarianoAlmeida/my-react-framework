import React, { useState, Suspense } from "react";
import { GithubReposClientWay } from "./GithubRepoClientWay";

export const GithubUserReposFinder = () => {
  const [user, setUser] = useState("");

  return (
    <section>
      <h3>GithubUserReposFinder</h3>

      <p>
        Here we have a input thar update one state, this value is passed for a{" "}
        <b>sync</b> co
      </p>
      <input
        type="text"
        onChange={(e) => setUser(e.target.value)}
        value={user}
      />

      <p>
        Here is a sync component, with a useEffect and manage loading state by
        himself
      </p>
      <GithubReposClientWay username={user} />
    </section>
  );
};
