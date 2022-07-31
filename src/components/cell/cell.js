import React from "react";

import Ball from "./../ball/ball";
import './cell.css'

export default React.memo(function Cell(props) {
	
	// console.log(props.tap) 
	return (
		<>
			<div onClick={props.tap} className='cell bg-white w-20 h-16 border border-primary/50 rounded  shadow-[10px_10px_10px_-5px_rgba(100,20,200,1)] overflow-hidden sm:hover:scale-95 hover:shadow-none'>
				<Ball num = {props.ball}/>
			</div>
		</>
	);
})
