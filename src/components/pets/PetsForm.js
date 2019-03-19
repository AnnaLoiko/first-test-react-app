import React from 'react';

export default function PetsForm(props) {
    // в компоненте App мы все пробросили внутрь компоненты Form
    // с помощью свойств название="значение", все легло в объект props
    const { animalName, owner, date, time, content, handleInput, handleSubmit } = props;
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Имя животного</label>
                <div className="col-sm-10">
                    <input type="text" placeholder="Имя" className="form-control" name="animalName" value={animalName} onChange={handleInput} />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Владелец</label>
                <div className="col-sm-10">
                    <input type="text" placeholder="Владелец" className="form-control" name="owner" value={owner} onChange={handleInput} />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Дата</label>
                <div className="col-sm-10">
                    <input type="date" className="form-control" name="date" value={date} onChange={handleInput} />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Время</label>
                <div className="col-sm-10">
                    <input type="time" className="form-control" name="time" value={time} onChange={handleInput} />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Заметки</label>
                <div className="col-sm-10">
                    <textarea placeholder="Заметки" name="content" value={content} className="form-control" onChange={handleInput}></textarea>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">
                    <input type="submit" className="btn btn-primary" value="Добавить"></input>
                </div>
            </div>            
        </form>
    );
}