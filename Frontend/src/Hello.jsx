import { useEffect, useState } from "react";

function Hello() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>{message}</p>
    </div>
  );
}

export default Hello;
