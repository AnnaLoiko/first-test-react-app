import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCurrency } from '../../redux/actions';

class Currency extends Component {
    state = {
        currency: [],
    }

    componentDidMount() {
        const apiCurr = 'http://www.nbrb.by/API/ExRates/Rates/145';
        this.props.fetchCurrency(apiCurr);
    }


    render() {
        const { currency } = this.props;
        console.log('currency7777777777777777777', currency);

        if (currency.length !== 0){
            const { currency } = this.props;
            //renderIconUrl();
            return(
                <React.Fragment>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Валюта</th>
                                <th>Курс</th>
                            </tr>
                            <tr>
                                <td>{currency.Cur_Name}</td>
                                <td>{currency.Cur_OfficialRate}</td>
                            </tr>
                        </tbody>
                    </table>
                </React.Fragment>
            )      
        
        } else {
            return(
                <React.Fragment>Заглушка</React.Fragment>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        currency: state.currency.items,
    }
}

export default connect(mapStateToProps, { fetchCurrency })(Currency);