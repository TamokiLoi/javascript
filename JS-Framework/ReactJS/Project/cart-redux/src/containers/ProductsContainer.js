import React, { Component } from 'react';
import Products from '../components/Products';
import Product from '../components/Product';
import PropTypes from 'prop-types';
import { addToCart, changeMessage } from '../store/actions/index';
import { connect } from 'react-redux';

class ProductsContainer extends Component {

    render() {
        return (
            <Products>
                {/* <!-- Product --> */}
                {this.showProducts(this.props.products)}
            </Products>
        );
    }

    showProducts = (products) => {
        var result = null
        var { onAddToCart, onChangeMessage } = this.props
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product
                    key={index}
                    product={product}
                    onAddToCart={onAddToCart}
                    onChangeMessage={onChangeMessage}
                />
            });
        }
        return result;
    }

}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired
};


const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddToCart: (product) => { dispatch(addToCart(product, 1)) },
        onChangeMessage: (message) => { dispatch(changeMessage(message)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
