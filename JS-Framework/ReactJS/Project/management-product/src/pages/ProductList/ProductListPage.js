import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { fetchProductRequest, deleteProductRequest } from '../../store/actions/index';

class ProductListPage extends Component {

    componentDidMount() {
        this.props.onFetchProduct();
    }

    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-primary mb-10">
                    <span className="fa fa-plus mr-5"></span>
                    Add New Product
                </Link>

                <ProductList>
                    {this.showProducts(this.props.products)}
                </ProductList>
            </div>
        );
    }

    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.props.onDelete}
                    />
                );
            });
        }
        return result;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onFetchProduct: () => { dispatch(fetchProductRequest()) },
        onDelete: (id) => { dispatch(deleteProductRequest(id)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
