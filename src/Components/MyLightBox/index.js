import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

class MyLightBox extends Component {
	state = {
		photoIndex: 0
	};
	render() {
        const { photoIndex } = this.state
		const { index, imagesArr, isOpen } = this.props;
		return (
			isOpen && (
				<Lightbox
					mainSrc={imagesArr[photoIndex]}
					nextSrc={imagesArr[(photoIndex + 1) % imagesArr.length]}
					prevSrc={imagesArr[(photoIndex + imagesArr.length - 1) % imagesArr.length]}
					onCloseRequest={(e) => {
						this.setState({ isOpen: false });
					}}
					onMovePrevRequest={() =>
						this.setState({
							photoIndex: (photoIndex + imagesArr.length - 1) % imagesArr.length
						})}
					onMoveNextRequest={() =>
						this.setState({
							photoIndex: (photoIndex + 1) % imagesArr.length
						})}
				/>
			)
		);
	}
}

export default MyLightBox;
