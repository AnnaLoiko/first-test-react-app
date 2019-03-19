import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

import Pets from              './screens/Pets';
import Weather from           './screens/Weather';
import YoutubeApp from        './screens/YoutubeApp';
import VideoSingle from       './components/youtube/VideoSingle';
import Books from             './screens/Books';
import Form from              './screens/Form';
import Single from            './screens/Single';
import Favourites from        './screens/Favourites';
import Memes from             './screens/Memes';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand navbar-light bg-light mb-3">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">

			        <li className="nav-item">
              	<Link className="nav-link" to='/'>Учет животных</Link>
              </li>
			        <li className="nav-item">
              	<Link className="nav-link" to='/weather'>Погодный виджет</Link>
              </li>
			        <li className="nav-item">
              	<Link className="nav-link" to='/youtube'>Поиск ролика</Link>
              </li>
			        <li className="nav-item">
              	<Link className="nav-link" to='/books'>Каталог книг</Link>
              </li>
			        <li className="nav-item">
              	<Link className="nav-link" to='/memes'>Генерация мемов</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Route exact  path='/'            component={Pets}/>
        <Route        path='/weather'     component={Weather}/> 
        <Route exact  path='/youtube'     component={YoutubeApp}/>
        <Route exact  path="/youtube/:id"	component={VideoSingle} />
        <Route        path="/books"	      component={Books} />
        <Route        path='/books/:id'   component={Single}/>
        <Route        path="/add"	        component={Form} />
        <Route        path='/favourites'  component={Favourites}/>
        <Route        path='/memes'       component={Memes}/>

      </React.Fragment>
    );
  }
}

export default App;
