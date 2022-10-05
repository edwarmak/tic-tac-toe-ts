// define interface that will be responsible for telling the parent that the props are available
interface Props {
    name: string | null;
    handleRestart(): void;
}

// receive the name of the winner and the restart method
const Finished = (props: Props) => {
    const { name, handleRestart } = props;
    return (
      <div>
        <h1>
          {name && `Player ${name} won the game`}
          {!name && "It's a tie "}
        </h1>
        <button onClick={handleRestart}>Restart</button>
      </div>
    );
  };
  export default Finished;

// this page will present the winning players name or a tie message
// button to restart the game
