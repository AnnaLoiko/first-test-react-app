import React, { Component } from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';

import { fetchMemes, generateMeme, writeIdForGenerator } from '../redux/actions';
import '../index.css';

class Memes extends Component {
	state = {
		count: 0,
		items:[],
		currentMemo:{
			id: 0,
			text0:'',
			text1:'',
		},
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState( { [name]: value } );
		console.log('name, value', name, value);
	}

	writeId = (template_id, name) => {
		console.log('id Memo', template_id);
		this.props.writeIdForGenerator(template_id, name);
	}



	generatorSubmit = (e) => {
		e.preventDefault();
		console.log('generatorSubmit this.state', this.state);
		const { text0, text1 } = this.state;
		const { currentMemo } = this.props;
		const currentMemoObj = {
			template_id: currentMemo,
			username: "g_user_107257642549096835361",
			password: 1234,
			text0: text0,
			text1: text1,
		}
		console.log('generatorSubmit currentMemo', currentMemoObj, requestDate);

		const requestDate = qs.stringify(currentMemoObj);
		
		this.props.generateMeme(requestDate);	
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const { count } = this.state;
		this.props.fetchMemes(count);
	}


	render() {
		const { items, currentMemo, currentName } = this.props;
		console.log('для запроса', currentMemo);
		const {text0, text1} = this.props;

		return(
			<div className="container">
				<h2>Генератор мемов</h2>
				<form className="form-inline mb-3" onSubmit={this.handleSubmit}>
					<input name="count" className="form-control mr-2" type="number" placeholder="колличество" onChange={this.handleChange}/>
					<span>мемов</span>
					<button type="submit" className="btn btn-success ml-2">Получить</button>
				</form>

				{(items.length > 0) ? 
					<React.Fragment>
						<ul className="list memes">
							{items.map( (item) => {
							return (
								<li key={item.id} onClick={ () => { this.writeId(item.id, item.name) }} >
									<img src={item.url} title={item.name} />
								</li>
							)
							})}
						</ul>

						{(currentName !== undefined) ? 
							<h5>Вы выбрали для генерации мем {currentName}</h5>
							: <h6>Выберите для генерацции мем</h6>
						}

						<form className="form-inline mb-3" onSubmit={this.generatorSubmit}>
							<input value={text0} name="text0" className="form-control mr-2" type="text" onChange={this.handleChange} />
							<input value={text1} name="text1" className="form-control mr-2" type="text" onChange={this.handleChange} />
							<button type="submit" className="btn btn-primary">Сгенерировать</button>
						</form>
					</React.Fragment>
					:
					false
				}

				{(currentMemo !== undefined) ? 
					<a href={currentMemo.page_url} target="_blank"><img src={currentMemo.url} alt="" /></a>
					: false
				}
			</div>
		)
	}
}

const mapStateToProps = state => {
console.log('444444444444444state', state)
return {
	items: state.memes.items,
	currentMemo: state.memes.currentMemo,
	currentName: state.memes.currentName
}
}
export default connect(mapStateToProps, { fetchMemes, generateMeme, writeIdForGenerator })(Memes);