import React, { Component } from 'react';

class ProductItem extends Component {

    onDelete = (id) => {
        if (confirm('Are you sure you want to delete this item?')) { //eslint-disable-line
           this.props.onDelete(id);
        }
    }

    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'In stocks' : 'Out of stocks';
        var statusClass = product.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.code}</td>
                <td>${product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <button type="button" className="btn btn-success mr-5">Edit</button>
                    <button type="button" className="btn btn-danger"
                        onClick={() => this.onDelete(product.id)}
                    >Delete</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
