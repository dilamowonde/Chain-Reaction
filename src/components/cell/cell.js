import React from "react";

import Ball from "./../ball/ball";

import "./cell.css";

const animate = (pop, setpopping) => {
	setpopping(true);
	setTimeout(() => {
		setpopping(false);
		pop();
	}, 1000);
};

export default React.memo(function Cell(props) {
	const [popping, setpopping] = React.useState(false);
	const ball = props.popper === 1 ? "ball" : "ball-2";
	const theme = props.popper === 1 ? "border-red-600" : "border-blue-600";
	return (
		<>
			<div
				onClick={() =>
					props.pop && props.popper === props.ball[1]
						? animate(props.tap, setpopping)
						: props.tap()
				}
				className={`cell ${theme} transition-all duration-1000 bg-white w-20 h-16 border-4 rounded  shadow-[10px_10px_10px_-5px_rgba(100,20,200,1)] overflow-hidden sm:hover:scale-95 hover:shadow-none`}>
				{popping ? (
					<div>
						<div className='relative animate-ping scale-25'>
							<figure className={`${ball} relative left-5 `}></figure>
							<figure className={`${ball} relative left-10  `}></figure>
							<figure className={`${ball} relative bottom-7`}></figure>
							<figure className={`${ball} relative bottom-5 left-5`}></figure>
						</div>
					</div>
				) : (
					<Ball num={props.ball} />
				)}
			</div>
		</>
	);
});
