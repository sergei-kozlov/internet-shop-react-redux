import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as R from 'ramda';
import {Link} from 'react-router-dom';

import {fetchPhoneById, addPhoneToBasket} from '../../actions';
import {getPhoneById} from '../../selectors/selectors';
import BasketCart from '../../components/basketCart';

import Spinner from '../../components/spinner';
import ErrorIndicator from '../../components/error-indicator';

class Phone extends Component {
    componentDidMount() {
        const phoneId = this.props.match.params.id;
        this.props.fetchPhoneById(phoneId)
    }

    renderField() {
        const {phone} = this.props;

        const columnField = R.compose(
            R.toPairs,
            R.pick([
                'cpu',
                'camera',
                'size',
                'weight',
                'display',
                'battery',
                'memory'
            ])
        )(phone);

        console.log('columns', columnField);

        return columnField.map(([key, value]) => (
            <div className='column' key={key}>
                <div className='ab-details-title'>
                    <p>{key}</p>
                </div>
                <div className='ab-details-info'>
                    {value}
                </div>
            </div>
        ))
    }

    renderContent() {
        const {phone} = this.props;

        return (
            <div className='thumbnail'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img
                            className='img-thumbnail'
                            src={phone.image}
                            alt={phone.name}
                        />
                    </div>
                    <div className='col-md-6'>
                        {this.renderField()}
                    </div>
                </div>
                <div className='caption-full'>
                    <h4 className='pull-right'>${phone.price}</h4>
                    <h4>{phone.name}</h4>
                    <p>{phone.description}</p>
                </div>
            </div>
        )
    }

    renderSidebar() {
        const {phone, addPhoneToBasket} = this.props;

        return (
            <div>
                <p className='lead'>Quick shop</p>
                <BasketCart/>
                <div className='form-group'>
                    <h1>{phone.name}</h1>
                    <h2>${phone.price}</h2>
                </div>
                <Link to='/' className='btn btn-info btn-block'>
                    Back to store
                </Link>
                <button
                    type='button'
                    className='btn btn-success btn-block'
                    onClick={() => addPhoneToBasket(phone.id)}
                >
                    Add to cart
                </button>
            </div>
        )
    }


    render() {

        const {loading, error} = this.props;

        if (loading) {
            return <Spinner/>;
        }

        if (error) {
            return <ErrorIndicator/>;
        }


        return (
            <div className='view-container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-9'>
                            {this.props.phone && this.renderContent()}
                        </div>
                        <div className='col-md-3'>
                            {this.props.phone && this.renderSidebar()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.phonePage.loading,
        error: state.phonePage.error,
        phone: getPhoneById(state, state.phonePage.id)
    }
};

const mapDispatchToProps = {
    fetchPhoneById,
    addPhoneToBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);