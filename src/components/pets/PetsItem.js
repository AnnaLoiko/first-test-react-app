import React from 'react';

export default function PetsItem(props) {
    const { animalName, owner, date, time, content, index, handleDelete } = props;

    return (
        <li>
            <div className="float-right">{date} {time}</div>
            <h3>
                <span>{animalName}</span> 
                <button className="btn btn-danger btn-sm" onClick={() => { handleDelete(index) }}>Удалить</button>
            </h3>
            <h5>{owner}</h5>
            <p>{content}</p>
        </li>
    );
}
