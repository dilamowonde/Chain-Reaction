import React from "react";

import "./ball.css";

const balls = (num, player) => {
	const ball = player === 1 ? "ball" : "ball-2";
	if (num === 0) {
		return <div></div>;
	} else if (num === 1) {
		return (
			<div className='relative  animate-bounce '>
				<figure className={`${ball} col-span-2 animate-spin `}></figure>
			</div>
		);
	} else if (num === 2) {
		return (
			<div className='relative animate-spin'>
				<figure className={`${ball} col-span-2`}></figure>
				<figure className={`${ball} col-span-2 absolute top-2`}></figure>
			</div>
		);
	} else if (num === 3) {
		return (
			<div className='relative animate-spin '>
				<figure className={`${ball} relative top-3 left-3 `}></figure>
				<figure className={`${ball} `}></figure>
				<figure className={`${ball} relative bottom-3 left-2 `}></figure>
			</div>
		);
	} else if (num === 4) {
		return (
			<div className='relative animate-spin '>
				<figure className={`${ball} relative top-3 left-3 `}></figure>
				<figure className={`${ball} `}></figure>
				<figure className={`${ball} relative bottom-3 left-2 `}></figure>
				<figure className={`${ball} absolute top-6 right-3 `}></figure>
			</div>
		);
	}
};

function Ball(props) {
	return (
		<div className='flex justify-center items-center h-full w-full '>
			{balls(props.num[0], props.num[1])}
		</div>
	);
}
export default React.memo(Ball);
