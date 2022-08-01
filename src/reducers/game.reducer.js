const reducer = (state, action) => {
	switch (action.type) {
		case "TAP":
			const [x, y] = action.coord;
			let col = state.column;
			let row = state.row;
			let board = state.board;
			
			if (action.player === state.player || action.player === -1) {
				if (x % (col - 1) === 0 && y % (row - 1) === 0) {
					if (board[x][y][0] >= 1) {
						board[x][y] = [0, -1];
						if (x === 0 && y === 0) {
							reducer(state, { ...action, coord: [x, y + 1] });
							reducer(state, { ...action, coord: [x + 1, y] });
						} else if (x === 0 && y !== 0) {
							reducer(state, { ...action, coord: [x, y - 1] });
							reducer(state, { ...action, coord: [x + 1, y] });
						} else if (x !== 0 && y !== 0) {
							reducer(state, { ...action, coord: [x, y - 1] });
							reducer(state, { ...action, coord: [x - 1, y] });
						} else if (x !== 0 && y === 0) {
							reducer(state, { ...action, coord: [x, y + 1] });
							reducer(state, { ...action, coord: [x - 1, y] });
						}
					} else {
						board[x][y] = [board[x][y][0] + 1, state.player];
					}
				} else if (x % (col - 1) === 0 || y % (row - 1) === 0) {
					if (board[x][y][0] >= 2) {
						board[x][y] = [0, -1];
						if (x === 0) {
							reducer(state, { ...action, coord: [x + 1, y] });
							reducer(state, { ...action, coord: [x, y - 1] });
							reducer(state, { ...action, coord: [x, y + 1] });
						} else if (y === 0) {
							reducer(state, { ...action, coord: [x + 1, y] });
							reducer(state, { ...action, coord: [x - 1, y] });
							reducer(state, { ...action, coord: [x, y + 1] });
						} else if (x % (col - 1) === 0 && y % (row - 1) !== 0) {
							reducer(state, { ...action, coord: [x - 1, y] });
							reducer(state, { ...action, coord: [x, y - 1] });
							reducer(state, { ...action, coord: [x, y + 1] });
						} else if (x % (col - 1) !== 0 && y % (row - 1) === 0) {
							reducer(state, { ...action, coord: [x + 1, y] });
							reducer(state, { ...action, coord: [x - 1, y] });
							reducer(state, { ...action, coord: [x, y - 1] });
						}
					} else {
						board[x][y] = [board[x][y][0] + 1, state.player];
					}
				} else if (board[x][y][0] >= 4) {
					board[x][y] = [0, -1];
					reducer(state, { ...action, coord: [x + 1, y] });
					reducer(state, { ...action, coord: [x - 1, y] });
					reducer(state, { ...action, coord: [x, y + 1] });
					reducer(state, { ...action, coord: [x, y - 1] });
				} else {
					board[x][y] = [board[x][y][0] + 1, state.player];
				}
				let nextPlayer = state.player === 1 ? 2 : 1;
				let won = -1;
			
				if (board.every((c) => c.every((r) => r[1] === 1||r[1] === -1))&&state.player1Moved&&state.player2Moved) {
					won = 1;
				}
				if (board.every((c) => c.every((r) => r[1] === 2|| r[1] === -1)&&state.player1Moved&&state.player2Moved)) {
	
					won = 2;
				}
				return {
					...state,
					board: board,
					player: nextPlayer,
					won,
					player1Moved: state.player1Moved||action.player===1,
					player2Moved: state.player2Moved||action.player===2,
				};
			}
			return state;
		case "WON":
			return {
				...state,
				won: action.winner,

			};
		case "RESET":
			// if(action.game==='again')
			// window.localStorage.getItem(action.reset);
			
			break;
		default:
			return state;
	}
};



export default reducer;
