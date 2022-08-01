import React from "react";
import { v4 as uuid } from "uuid";
import Cell from "./../components/cell/cell";
import { Board, GameFunction } from "./../contexts/Boardprovider";
import "./gameboard.css";

const makeboard = (board, dispatch, player) => {
	const tableBoard = [];
	const tableRow = [];

	for (let i = 0; i < board.column; i++) {
		for (let j = 0; j < board.row; j++) {
			let coord = `${i}-${j}`;
			let animate = false;
			if (
				i % (board.column - 1) === 0 &&
				j % (board.row - 1) === 0 &&
				board.board[i][j][0] === 1
			) {
				animate = true;
			} else if (
				(i % (board.column - 1) === 0 || j % (board.row - 1) === 0) &&
				board.board[i][j][0] === 2
			) {
				animate = true;
			} else if (board.board[i][j][0] === 4) {
				animate = true;
			}
			tableRow.push(
				<Cell
					key={uuid()}
					pop={animate}
					tap={() =>
						dispatch({
							type: "TAP",
							coord: coord.split("-").map(Number),
							player: board.board[i][j][1],
						})
					}
					popper={board.player}
					ball={board.board[i][j]}
				/>,
			);
		}
	}

	tableBoard.push(
		<div key={uuid()} className='grid gap-1 grid-cols-5 grid-rows-10 '>
			{tableRow}
		</div>,
	);
	return tableBoard;
};
function Gameboard() {
	const dispatch = React.useContext(GameFunction);
	const board = React.useContext(Board);
	return (
		<>
			<div className='flex flex-col justify-center items-center w-full h-full bg-gradient-to-br from-primary via-color-base to-secondary  mb-2 '>
				<div>
					{board.won !== -1 ? (
						<div className=''>
							<div
								className={`${board.won === 1 && " player-1 "}${
									board.won === 2 && " player-2 "
								} text-white gap-y-2 rounded-lg p-2  p5  overflow-hidden`}>
								<h1 className='text-5xl font-extrabold'>Game Over</h1>
								{board.won !== -1 && (
									<h1 className='text-5xl font-normal'>
										player {board.won} Win
									</h1>
								)}
								<a
									href='/'
									className='hover:underline cursor-pointer'
									onClick={() => dispatch({ type: "RESET",game:"again" })}>
									play again
								</a>
							</div>
						</div>
					) : (
						<div className='flex flex-col justify-center items-center'>
							<a
								href='/'
								onClick={() => dispatch({ type: "RESET",game:"new" })}
								className='relative top-20 rounded-xl font-bold text-white p-2 w-64 flex items-center justify-center bg-green-600'>
								<span>Play again</span>
							</a>

							<div className=''>
								<div className='scale-75 rounded-lg p-2  bg-gradient-to-br from-secondary via-color-base to-primary  overflow-hidden'>
									{makeboard(board, dispatch, board.player)}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default Gameboard;
