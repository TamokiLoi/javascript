import React, { Component } from "react";

class Product extends Component {
    render() {
        return (
            <div className="col-3">
                <div className="card text-left mb-4">
                    <img className="card-img-top" src={this.props.image} alt="react" />
                    <div className="card-body">
                        <b className="float-left">{this.props.product_name}</b>
                        <i className="float-right">{this.props.product_price} VND</i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
