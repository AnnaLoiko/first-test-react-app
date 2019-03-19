import React from 'react';

export default function PetsSettings(props) {
    const { search, order, handleInput } = props;    
    return (
        <div className="settings">
            <div className="form-group row">
                <div className="col-sm-2">
                    <select  onChange={handleInput} name="order" value={order} className="form-control">
                        <option value="">Без</option>
                        <option value="az">A-Z</option>
                        <option value="za">Z-A</option>
                    </select>
                </div>
                <div className="col-sm-10">
                    <input type="text" placeholder="Поиск по имени животного" value={search} className="form-control" name="search" onChange={handleInput} />
                </div>
            </div>
        </div>
    );
}
