import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchVideo, createVideo } from '../redux/actions';
import '../components/youtube/index.css';


class YoutubeApp extends Component {
    state = {
        inpVal: '',
        items: [],
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        console.log('000 handleChange', { [name]: value } );
        this.setState( { [name]: value } );
    
    }

  
    handleSubmit = (e) => {
        e.preventDefault();
        const { inpVal } = this.state;
        let apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBrmaj7j0yIJGWcGPYH3THz_Rh8BYAtlQs&q=${inpVal}&type=video;`
        this.props.fetchVideo(apiUrl);
    }

    handleFavoriteVideo = (id) => {
        this.props.createVideo(id);
        this.props.history.push(`/youtube/${id}`);
    }


    render() {
        const { youtube } = this.props;
   
        return (
            <div className="container">
                <h1>Поиск ролика</h1>     
                <form className="wrap"  onSubmit={this.handleSubmit}>
                    <input type="text" className="input" placeholder="Что ищете?" name="inpVal"  onChange={this.handleChange} />
                    <input type="submit" value="Искать" className="button" />
                </form>

                {(youtube.length !== 0) ?
                    <div className="previews-box">         
                        {youtube.items.map((item,index) => {
                            return (
                                <span key={item.id.videoId} onClick={() => { this.handleFavoriteVideo(item.id.videoId) }}>
                                    <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                                </span>
                            )
                        })}
                    </div>
                    :
                    false
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    youtube: state.youtube.items
  }
}
export default connect(mapStateToProps, { fetchVideo, createVideo })(YoutubeApp);