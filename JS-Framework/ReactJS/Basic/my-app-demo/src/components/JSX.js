import React, { Component } from 'react';

class JSX extends Component {
    showInfoProduct(product) {
        if (product.status) {
            return <h3>
                ID: {product.id}<br />
                Name: {product.name}<br />
                Price: {product.price}<br />
                Status: {product.status ? 'Active' : 'Pending'}<br />
            </h3>
        }
    }

    render() {
        var a = 5;
        var b = 7;
        var name = 'tamoki';
        var product = {
            id: 1,
            name: 'Iphone',
            price: '16.000.000 VND',
            status: true
        };

        var users = [
            {
                id: 1,
                name: 'tamoki',
                age: 28,
            },
            {
                id: 2,
                name: 'rimoto',
                age: 29,
            },
            {
                id: 3,
                name: 'tamoka',
                age: 30,
            },
        ]

        var elements = users.map((user, index) => {
            return <div key={user.id}>
                <h2>Name: {user.name}</h2>
                <p>Age: {user.age}</p>
            </div>
        })

        return (
            <div>
                <div className="ml-30">
                    a: {a} <br />
                    b: {b} <br />
                    a + b: {a + b} <br />
                    <h3>Name: {name}</h3>
                    {this.showInfoProduct(product)}
                    <br />
                    <hr />
                    {elements}
                </div>
            </div>
        );
    }
}

export default JSX;
