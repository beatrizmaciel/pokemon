import "./style.scss";

const letters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const lettersSecondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const lettersThirdRow = ["Z", "X", "C", "V", "B", "N", "M"];

export function Keyboard({
    onClickLetter,
    onClickChances,
    chances,
    checkStatus,
}) {
    function letterStatus(letter){
        switch (checkStatus(letter)) {
            case "right":
              return true; //mudei
            case "wrong":
              return false; //mudei
            default:
              return null;
    }
}

return (
    <div className="keyboard-container">
      <div className="keyboard-button">
        {letters &&
          letters.map((item) => (
            <button onClick={() => onClickLetter(item)} key={item}>
              {item}
              {letterStatus(item)}
            </button>
          ))}
      </div>
      <div className="keyboard-button">
        {lettersSecondRow &&
          lettersSecondRow.map((item) => (
            <button onClick={() => onClickLetter(item)} key={item}>
              {item}
              {letterStatus(item)}
            </button>
          ))}
      </div>
      <div className="keyboard-button">
        {lettersThirdRow &&
          lettersThirdRow.map((item) => (
            <button onClick={() => onClickLetter(item)} key={item}>
              {item}
              {letterStatus(item)}
            </button>
          ))}
        <button className="button-chances" onClick={onClickChances}>
          <div className="chances">
            <p>{chances}</p>
          </div>
        </button>
      </div>
    </div>
  );
}