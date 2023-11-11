export default function GameOver ({winner, onRestart}) {
    return <div id="game-over">
        <h2>ARE YOU MADE!!! Game Over!!</h2>
        {winner && <p>{winner} won!</p>}
        {!winner && <p>It's a draw</p>}
        <p>
            <button onClick={onRestart}>Rematch!</button>
        </p>
    </div>
}