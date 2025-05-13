import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setPlayerName] = useState("");
  // const [submitted, setSubmitted] = useState(false);

  // function handleChange(event) {
  // }
  
  function handleClick() {
    setPlayerName(playerName.current.value);
    playerName.current.value = '';
    // setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
          // value={playerName}
          // onChange={handleChange}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
