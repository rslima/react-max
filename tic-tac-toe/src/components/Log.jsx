export default function Log({ moves }) {
  return (
    <ol id='log'>
      {moves.map((move, index) => (
        <li key={index}>
          {move.player} selected {move.square.row}, {move.square.col}
        </li>
      ))}
    </ol>
  );
}
