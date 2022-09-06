import type { Player } from './App';

type SquareProps = {
  value: Player;
  onClick: () => void;
};

export default function Square(props: SquareProps) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
