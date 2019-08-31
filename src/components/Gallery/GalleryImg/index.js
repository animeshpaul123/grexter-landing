import React from 'react';
import { Col } from 'reactstrap';
import './index.css';

const GalleryImg = (props) => {
	const { src, altName, sm, md } = props;
	let style = {
		padding: md >= 6 ? 8 : 6
	};
	return (
		<Col sm={sm} md={md}>
			<div className="gallery-img" style={style}>
				<img src={src} alt={altName ? altName : 'gallery'} />
			</div>
		</Col>
	);
};

export default GalleryImg;
