import React from 'react';

import PetsItem from './PetsItem';

export default function PetsList(props) {
    const { array, handleDelete } = props;

    return (
        <ul className="list">
            {array.map((petitem,index) => {
                return (
                    <PetsItem key={index} {...petitem} index={index} handleDelete={handleDelete}/>
                )
            })}
        </ul>
    );
}
