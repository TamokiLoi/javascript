import React, { Component } from 'react';
import Product from './Product';

class PropsDemo extends Component {

    onClick() {
        console.log('App');
    }

    onAddProduct = () => {
        console.log(this.refs.name.value);
    }

    render() {
        var products = [
            {
                id: 1,
                name: 'Apple Iphone 6',
                price: '15.000.000',
                image: 'https://images-na.ssl-images-amazon.com/images/I/413pD2TNh8L._SX466_.jpg',
                status: true
            },
            {
                id: 2,
                name: 'Samsung Galaxy S7',
                price: '10.000.000',
                image: "https://hnsfpau.imgix.net/5/images/detailed/94/Huawei-Y6-Pro-2019-Front0065746-0065751.jpg?fit=fill&bg=0FFF&w=1500&h=844&auto=format,compress",
                status: false
            },
            {
                id: 3,
                name: 'Xiao Mi 9',
                price: '12.000.000',
                image: "https://www.lg.com/au/images/smartphones/md05878255/gallery/V30-medium01.jpg",
                status: true
            },
            {
                id: 4,
                name: 'Xiao Mi 7',
                price: '7.000.000',
                image: "https://i-vnexpress.vnecdn.net/2019/11/21/Austerlitz-baron-Pascal-5658-1574322614_m_460x0.jpg",
                status: false
            },
        ];

        let elements = products.map((product, index) => {
            let result = '';
            if (product.status) {
                result = <Product
                    key={product.id}
                    price={product.price}
                    image={product.image}
                >{product.name}</Product>
            }
            return result;
        })

        return (
            <div>
                <div className="container">
                    <div className="row">

                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="panel panel-danger">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Add Product</h3>
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <label>Name Product</label>
                                            <input type="text" className="form-control" ref="name" />
                                            <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }} onClick={ this.onAddProduct }>Submit</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            {elements}
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <button type="button" className="btn btn-warning" onClick={this.onClick}>Click me!</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default PropsDemo;
