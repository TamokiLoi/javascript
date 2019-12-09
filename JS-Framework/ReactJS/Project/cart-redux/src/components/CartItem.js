import React, { Component } from 'react';
import * as MESSAGE from '../store/constants/Message';

class CartItem extends Component {

    render() {
        var someValidPath = null;
        var { product, quantity } = this.props.cartItem;

        return (
            <tr>
                <th scope="row">
                    <img src={product.image} className="img-fluid z-depth-0" alt={product.name}/>
                </th>
                <td>
                    <h5>
                        <strong>{product.name}</strong>
                    </h5>
                </td>
                <td>{product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
                            onClick={() => this.onUpdateQuantity(product, quantity - 1)}
                            >
                            <a href={someValidPath}>—</a>
                        </label>
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
                            onClick={() => this.onUpdateQuantity(product, quantity + 1)}
                            >
                            <a href={someValidPath}>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showSubTotal(product.price, quantity)}$</td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-sm btn-primary waves-effect waves-light" 
                        data-toggle="tooltip" data-placement="top"
                        title="" 
                        data-original-title="Remove item"
                        onClick={() => this.onDeleteProductInCart(product)}
                        >X</button>
                </td>
            </tr>
        );
    }

    onUpdateQuantity = (product, quantity) => {
        if(quantity > 0) {
            this.props.onUpdateProductInCart(product, quantity);
            this.props.onChangeMessage(MESSAGE.MSG_UPDATE_PRODUCT_IN_CART_SUCCESS);
        }
    }

    onDeleteProductInCart = (product) => {
        this.props.onDeleteProductInCart(product);
        this.props.onChangeMessage(MESSAGE.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    showSubTotal = (price, quantity) => {
        return price * quantity;
    }
}

export default CartItem;
