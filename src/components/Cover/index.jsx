import React from 'react';
import './style.css';

const Cover = (props) => {
	console.log('cover image', props.coverImg);
	const style = {
		background: `linear - gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.coverImg})`
	};
	return (
		<div className="container-fluid main clearfix" style={style}>
			{props.children}
		</div>
	);
};

export default Cover;
