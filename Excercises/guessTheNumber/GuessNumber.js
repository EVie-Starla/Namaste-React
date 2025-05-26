import { useCallback, useState } from "react";
const GuessNumber = () => {
  const randomNumber = () => Math.floor(Math.random() * 100) + 1;
  const [secretNumber, setSecretNumber] = useState(randomNumber);
  const [searchText, setSearchText] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [previousGuesses,setPreviousGuesses]=useState(new Set());
  const check = useCallback(() => {
    const searchedNum = parseInt(searchText);

    if (isNaN(searchedNum) || searchedNum < 1 || searchedNum > 100) {
      setMessage("Please enter a number between 1 to 100");
      return;
    }
    if(previousGuesses.has(searchedNum)){
        setMessage("You already tried that number!");
        return
    };    
    setPreviousGuesses(prev=>new Set(prev).add(searchedNum));
    const nextAttempts=attempts+1;
    setAttempts(nextAttempts);
    if (searchedNum < secretNumber) setMessage("Too low, try again!");
    else if (searchedNum > secretNumber) setMessage("Too hign, try again!");
    else {
      setMessage(
        `Congratulations! You guessed the number in ${nextAttempts} attempts)`
      );
      resetGame();
    }
  });
  const resetGame = () => {
    setSecretNumber(randomNumber());
    setSearchText("");
    // setMessage("");
    setAttempts(0);
    setPreviousGuesses(new Set());
  };
  return (
    <div className="container">
      <h1>Guess The Number!</h1>
      <input
        className="user-input"
        // type="number"
        placeholder="Enter a number between 1 and 100"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <div className="buttons">
        <button className="btn" onClick={check}>
          Check Guess
        </button>
        <button
          className="btn"
          onClick={() => {
            resetGame();
            setMessage("");
          }}
        >
          Reset Game
        </button>
      </div>
      <div>{message}</div>
    </div>
  );
};
export default GuessNumber;
