import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createVideo } from '../../redux/actions';
import './index.css';

class VideoSingle extends React.Component {

    state = {
        inpVal: '',
        items: [],
        currentId: 0,
    }

	componentDidMount() {
		const currentId = this.props.location.pathname;
		this.setState( { currentId: currentId});
	}

	render() {
        const { currentId } = this.props;
	
		return (
			<React.Fragment>
				<div className="video-box">		
					<iframe 
						width="560" height="315" 
						src={`https://www.youtube.com/embed/${currentId}`}
						frameBorder="0" allow="autoplay; encrypted-media" 
						allowFullScreen
						title="youtube">
					</iframe>
				</div>
				<div className="text-center">
					<Link to="/youtube" className="button">
						Вернуться к списку
					</Link>
				</div>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => {
  return {
    currentId: state.youtube.currentId
  }
}
export default connect(mapStateToProps, { createVideo })(VideoSingle);