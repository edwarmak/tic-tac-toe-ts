interface Props {
// number that defines the position of the board (index)
    index: number;
// the value (X or O)
    value: string;
// click event handler
    handleClick(index: number): void;
  }

  const Square = (props: Props) => {
    const { index, value, handleClick } = props;
    // styling for the squares
    const styles = {
      button: {
        width: "100px",
        height: "100px",
        fontSize: "46px"
      }
    };
// click will recieve the square index so the function that will control the board knows what piece has been clicked 
    return (
      <button style={styles.button} onClick={() => handleClick(index)}>
        {value}
      </button>
    );
  };
  export default Square;