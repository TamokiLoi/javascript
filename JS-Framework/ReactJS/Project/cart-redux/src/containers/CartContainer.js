import React, { Component } from 'react';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import PropTypes from 'prop-types';
import * as MESSAGE from '../store/constants/Message';
import { connect } from 'react-redux';
import { updateProductInCart, deleteProductInCart, changeMessage } from '../store/actions/index';

class CartContainer extends Component {

    render() {
        return (
            <Cart>
                {this.showCartItem(this.props.cart)}
                {this.showCartResult(this.props.cart)}
            </Cart>
        );
    }

    showCartItem = (cart) => {
        var result = <tr>
            <td>{MESSAGE.MSG_CART_EMPTY}</td>
        </tr>;
        var { onUpdateProductInCart, onDeleteProductInCart, onChangeMessage } = this.props;
        if (cart.length > 0) {
            result = cart.map((cartItem, index) => {
                return <CartItem
                    key={index}
                    cartItem={cartItem}
                    index={index}
                    onUpdateProductInCart={onUpdateProductInCart}
                    onDeleteProductInCart={onDeleteProductInCart}
                    onChangeMessage={onChangeMessage}
                />
            });
        }
        return result;
    }

    showCartResult = (cart) => {
        var result = null;
        if (cart.length > 0)
            result = <CartResult cart={cart} />
        return result;
    }

}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }),
            quantity: PropTypes.number.isRequired
        })
    ).isRequired
};


const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onUpdateProductInCart: (product, quantity) => { dispatch(updateProductInCart(product, quantity)) },
        onDeleteProductInCart: (product, quantity) => { dispatch(deleteProductInCart(product, quantity)) },
        onChangeMessage: (message) => { dispatch(changeMessage(message)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
