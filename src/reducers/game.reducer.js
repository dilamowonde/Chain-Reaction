const reducer = (state, action) => {
	// console.log(action.coord);
	switch (action.type) {
		case "TAP":
			const [x, y] = action.coord;
			let col = state.column;
			let row = state.row;
			// console.log(state);
			let board = state.board;
			// console.log("X , Y === ", x, y);
			// console.log("col , row === ", col, row);
			if (action.player === state.player || action.player === -1) {
				if (x % (col - 1) === 0 && y % (row - 1) === 0) {
					if (board[x][y][0] === 1) {
						board[x][y] = [0, -1];
						if (x === 0 && y === 0) {
							console.log("corner 1");
							reducer(state, { ...action, coord: [x, y + 1] });
							reducer(state, { ...action, coord: [x + 1, y] });
						} else if (x === 0 && y !== 0) {
							console.log("corner 2");
							reducer(state, { ...action, coord: [x, y - 1] });
							reducer(state, { ...action, coord: [x + 1, y] });
						} else if (x !== 0 && y !== 0) {
							console.log("corner 3");
							reducer(state, { ...action, coord: [x, y - 1] });
							reducer(state, { ...action, coord: [x - 1, y] });
						} else if (x !== 0 && y === 0) {
							console.log("corner 4");
							reducer(state, { ...action, coord: [x, y + 1] });
							reducer(state, { ...action, coord: [x - 1, y] });
						}
					} else {
						console.log("other");
						board[x][y] = [board[x][y][0] + 1, state.player];
					}
				} else if (x % (col - 1) === 0 || y % (row - 1) === 0) {
					// console.log(row,board[x][y])
					if (board[x][y][0] === 2) {
						board[x][y][0] = 0;
						if (x === 0) {
							console.log("edge 1");
							reducer(state, { ...action, coord: [x + 1, y] });
							reducer(state, { ...action, coord: [x, y - 1] });
							reducer(state, { ...action, coord: [x, y + 1] });
						} else if (y === 0) {
							console.log("edge 4");
							reducer(state, { ...action, coord: [x + 1, y] });
							reducer(state, { ...action, coord: [x - 1, y] });
							reducer(state, { ...action, coord: [x, y + 1] });
						} else if (x % (col - 1) === 0 && y % (row - 1) !== 0) {
							console.log("edge 3");
							reducer(state, { ...action, coord: [x - 1, y] });
							reducer(state, { ...action, coord: [x, y - 1] });
							reducer(state, { ...action, coord: [x, y + 1] });
						} else if (x % (col - 1) !== 0 && y % (row - 1) === 0) {
							console.log("edge 2");
							reducer(state, { ...action, coord: [x + 1, y] });
							reducer(state, { ...action, coord: [x - 1, y] });
							reducer(state, { ...action, coord: [x, y - 1] });
						}
					} else {
						console.log("other");
						board[x][y] = [board[x][y][0] + 1, state.player];
					}
				} else if (board[x][y][0] === 4) {
					board[x][y][0] = 0;
					reducer(state, { ...action, coord: [x + 1, y] });
					reducer(state, { ...action, coord: [x - 1, y] });
					reducer(state, { ...action, coord: [x, y + 1] });
					reducer(state, { ...action, coord: [x, y - 1] });
					console.log("center");
				} else {
					board[x][y] = [board[x][y][0] + 1, state.player];
				}
				let nextPlayer = state.player === 1 ? 2 : 1;
				return {
					...state,
					board: board,
					player: nextPlayer,
				};
			}
			return state;
		default:
			return state;
	}
};

// function flipAround(board,x,y){
// 	if(board[x][y]<=4)return board
// 	else{
// 			board = flipAround(board,x+1,y)
// 			board = flipAround(board,x,y+1)
// 			board = flipAround(board,x-1,y)
// 			board = flipAround(board,x,y-1)
// 			return board

// 	}
// }

export default reducer;
