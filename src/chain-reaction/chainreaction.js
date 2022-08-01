import React from "react";
import Gameboard from "./gameboard";
import Boardprovider from "./../contexts/Boardprovider";

export default React.memo(function Chainreaction() {
	return (
		<div className='h-screen overflow-hidden'>
			<div className='bg-red-700 font-bold text-white py-1'>Chain Reaction</div>
			<Boardprovider>
				<Gameboard />
			</Boardprovider>
		</div>
	);
});
