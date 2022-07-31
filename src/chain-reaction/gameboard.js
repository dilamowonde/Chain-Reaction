import React from "react";
import { v4 as uuid } from 'uuid';

import Cell from "./../components/cell/cell";
import { Board, GameFunction } from "./../contexts/Boardprovider";


const makeboard = (board,dispatch) => {
	const tableBoard = [];
	const tableRow = [];
	for (let i = 0; i < board.column; i++) {
		for (let j = 0; j < board.row; j++) {
			let coord = `${i}-${j}`;
			tableRow.push(<Cell key={uuid()}  tap={()=>dispatch({type:"TAP",coord:coord.split('-').map(Number),player:board.board[i][j][1]})} ball={board.board[i][j]} />);
		}
	}

	tableBoard.push(<div key={uuid()} className='grid gap-1 grid-cols-5 grid-rows-10 ' >{tableRow}</div>);
	return tableBoard;
};
function Gameboard() {
	const dispatch = React.useContext(GameFunction);
	const board = React.useContext(Board);
	return (
		<>
			<div className='flex justify-center items-center w-full h-full bg-gradient-to-br from-primary via-color-base to-secondary  mb-2 '>
				<div>
					<div className=''>
						<div className='gap-y-2	 rounded-lg p-2  bg-gradient-to-br from-secondary via-color-base to-primary  overflow-hidden'>
							{makeboard(board,dispatch)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default React.memo(Gameboard)