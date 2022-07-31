import React from "react";
import Gameboard from "./gameboard";
import Boardprovider from "./../contexts/Boardprovider";

export default React.memo(function Chainreaction() {
	return (
	
			<div className='h-screen overflow-hidden'>
				<div className=''>Chain Reaction</div>
				<Boardprovider>
					<Gameboard />
				</Boardprovider>
			</div>
	);
})
