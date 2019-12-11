import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveProductRequest, getProductRequest } from '../../store/actions/index';

class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            code: '',
            price: '',
            status: false
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if (match && match.params.id) this.props.onGetDetail(match.params.id);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        var product = nextProps.product;
        if (product) {
            for (let key in product) {
                if (product.hasOwnProperty(key)) {
                    this.onSetState(key, product[key]);
                }
            }
        }
    }

    onSetState(name, value) {
        this.setState({ [name]: value });
    }

    onChange = (event) => {
        var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.onSetState(event.target.name, value)
    }

    onSave = (event) => {
        event.preventDefault();
        this.props.onSave(this.state);
        this.props.history.goBack();
    }

    render() {
        var { name, code, price, status } = this.state;

        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" className="form-control"
                            name="name"
                            value={name}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Code: </label>
                        <input type="text" className="form-control"
                            name="code"
                            value={code}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Price: </label>
                        <input type="number" className="form-control"
                            name="price"
                            value={price}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Status: </label>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"
                                    name="status"
                                    value={status}
                                    checked={status}
                                    onChange={this.onChange}
                                />In stocks
                            </label>
                        </div>
                    </div>

                    <Link to="/product" className="btn btn-danger mr-5">
                        <span className="fa fa-arrow-left mr-5"></span>
                        Back to List
                    </Link>
                    <button type="submit" className="btn btn-primary">
                        <span className="fa fa-save mr-5"></span>
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        product: state.product
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSave: (product) => { dispatch(saveProductRequest(product)) },
        onGetDetail: (id) => { dispatch(getProductRequest(id)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
