import React, { Component } from 'react';

class Cart extends Component {

    render() {
        return (
            <section className="section">
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* cart-item */}
                            {/* cart-result */}
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }

}

export default Cart;
