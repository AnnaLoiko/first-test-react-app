import React from 'react';
import { Link } from 'react-router-dom';

import PetsForm     from '../components/pets/PetsForm';
import PetsSettings from '../components/pets/PetsSettings';
import PetsList     from '../components/pets/PetsList';
import Weather      from './Weather';
import Currency     from '../components/currency/Currency';

class Pets extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arr: [],
            animalName: '',
            owner: "",
            date: "",
            time: "",
            content: "",
            search: "",
            order: ""
        }
    
        this.handleSubmit   = this.handleSubmit.bind(this);
        this.handleDelete   = this.handleDelete.bind(this);
        this.handleInput  = this.handleInput.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();

        const { animalName, owner, date, time, content, arr } = this.state;

        const animal = {
            animalName: animalName,
            owner: owner,
            date: date,
            time: time,
            content: content,
        };

        const copyArr = [...arr];

        copyArr.push(animal);

        this.setState({ arr: copyArr, animalName: "", owner: "", date: "", time: "", content: "" }); 
    }





    handleInput(e) {
        const { name, value } = e.target;

        this.setState( { [name]: value } ); 
    }



    handleDelete(index) {
        const { arr } = this.state;

        const copyArr = [...arr];
    
        copyArr.splice(index, 1);

        this.setState({ arr: copyArr });
    }




    render() {
        const { animalName, owner, date, time, content, arr, search, order } = this.state;
        let copyArr = [...arr];    

        if (search) {
            copyArr = copyArr.filter(animal => {
                return animal.animalName.toLowerCase().includes(search.toLowerCase());
            });
        }

        if (order) {
            switch (order) {
                case "az":
                copyArr.sort((a, b) => {
                    return (a.animalName.toLowerCase() > b.animalName.toLowerCase()) ? 1 : -1;
                });
                break;
                case "za":
                copyArr.sort((a, b) => {
                    return (a.animalName.toLowerCase() < b.animalName.toLowerCase()) ? 1 : -1;
                });
                break;
            }
        }
       

        return (
            <div className="container">
                <div className="row">
                    
                    <div className="col col-lg-8">
                        <h1>Учет животных</h1>
                        <PetsForm
                            animalName={animalName}
                            owner={owner}
                            date={date}
                            time={time}
                            content={content}
                            handleInput={this.handleInput}
                            handleSubmit={this.handleSubmit} 
                        />
                        <PetsSettings
                            search={search} 
                            handleInput={this.handleInput}                        
                        />
                        <div className="list">
                            {(arr.length > 0)
                                ?
                                <PetsList 
                                    array={copyArr} 
                                    handleDelete={this.handleDelete} 
                                />
                                :
                                <p>Пока список пуст.</p>
                            }
                        </div>
                    </div>
                    <div className="col col-lg-4">
                        <Link  to='/weather'>
                            <Weather />
                        </Link>
                        <div>
                            <br/>
                            <Currency />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Pets;