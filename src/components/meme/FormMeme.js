import React from 'react';

export default function FormMeme(props) {
    console.log(props);
    const { handleSubmit, handleChange } = props;

    return (
        <React.Fragment>
            <h2>Генератор мемов</h2>
            <form className="form-inline mb-3" onSubmit={handleSubmit}>
                <input name="count" className="form-control mr-2" type="number" placeholder="колличество" onChange={handleChange} />
                <span>мемов</span>
                <button type="submit" className="btn btn-success ml-2">Получить</button>
            </form>
        </React.Fragment>
    );
}
