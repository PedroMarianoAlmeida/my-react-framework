import React, { useState, useEffect } from "react";

export const SendingInputValueToLocalStorage = ({
  keyName = "SendingInputValueToLocalStorage",
}) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    localStorage.setItem(keyName, user);
    window.dispatchEvent(new Event(keyName));
  }, [user]);
  return (
    <section>
      <h3>SendingInputValueToLocalStorage</h3>

      <input
        type="text"
        onChange={(e) => setUser(e.target.value)}
        value={user}
      />
    </section>
  );
};
