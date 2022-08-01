import React from "react";
import useGameReducer from "./../reducers/game.reducer";
import useLocalStorageReducer from "./../reducers/localstorage.reducer";

const defaultBoard = {
	row: 5,
	column: 10,
	players:2,
	player:1,
	board: [
		[[3,1],[3,1],[3,1],[3,1],[3,1]],
		[[3,1],[3,1],[3,1],[3,1],[3,1]],
		[[3,1],[3,1],[3,1],[3,1],[3,1]],
		[[3,1],[3,1],[3,1],[3,1],[3,1]],
		[[3,1],[3,1],[3,1],[3,1],[3,1]],
		[[3,1],[3,1],[3,1],[3,1],[3,1]],
		[[3,1],[3,1],[3,1],[3,1],[3,1]],
		[[3,1],[3,1],[3,1],[3,1],[3,1]],
		[[3,1],[3,1],[3,1],[3,1],[0,1]],
		[[3,1],[3,1],[3,1],[3,1],[3,2]],
	],
   user: "Anonimus",
	won:-1,
	player1Moved: false, 
	player2Moved: false 
};
export const Board = React.createContext();
export const GameFunction = React.createContext();

export default function Boardprovider(props) {
	const [board, dispatch] = useLocalStorageReducer(
		"ChainReaction",
		defaultBoard,
		useGameReducer,
	);
	return (
		<Board.Provider value={{...board}}>
			<GameFunction.Provider value={dispatch}>{props.children}</GameFunction.Provider>
		</Board.Provider>
	);
}
