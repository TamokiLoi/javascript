import React, { Component } from 'react';

class StateDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
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
            ],
            isActive: true
        };
    }

    onSetState = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    render() {

        let elements = this.state.products.map((product, index) => {
            let result = '';
            if(this.state.isActive) {
                result = <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>
                    <span className="label label-success">{product.price} VND</span>
                </td>
            </tr>
            }
            return result;
        })

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>{elements}</tbody>
                        </table>
                        <button type="button" className="btn btn-lg btn-warning" onClick={this.onSetState}>
                            Active : {this.state.isActive ? 'true' : 'false'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default StateDemo;
