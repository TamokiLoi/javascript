import React, { Component } from 'react';

class Product extends Component {
    render() {
        var { match } = this.props;
        var name = match.params.name;

        return (
            <div>
                This is detail Product: {name} !
            </div>
        );
    }
}

export default Product;
