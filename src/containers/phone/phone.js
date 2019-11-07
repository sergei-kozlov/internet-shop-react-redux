import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import * as R from 'ramda';

import {fetchPhoneById, addPhoneToBasket} from '../../actions';
import {getPhoneById} from '../../selectors/selectors';

import Spinner from '../../components/spinner';
import ShopHeader from '../../components/shop-header';

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
        const content =  <PhoneView phone={phone}/>;

        return (
            <div className='thumbnail'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="img-thumbnail">
                            {content}
                        </div>
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
                <p className='lead'>KWIK-E-MART</p>
                {/*<BasketCart/>*/}
                <div className='form-group'>
                    <h1>{phone.name}</h1>
                    <h2>${phone.price}</h2>
                </div>
                {/*<Link to='/' className='btn btn-info btn-block'>*/}
                {/*    Back to store*/}
                {/*</Link>*/}
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
        const {loading} = this.props;

        const spinner = loading ? <Spinner /> : null;



        return (
            <div className='view-container'>
                <div className='container'>
                    <div className='row'>
                        <ShopHeader />
                        <div className='col-md-9'>
                            {spinner}
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


const PhoneView = ({phone}) => {
    return (
    <Fragment>
        <img
            src={phone.image}
            alt={phone.name}
        />
    </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        loading: state.phonePage.loading,
        phone: getPhoneById(state, state.phonePage.id)
    }
};

const mapDispatchToProps = {
    fetchPhoneById,
    addPhoneToBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);