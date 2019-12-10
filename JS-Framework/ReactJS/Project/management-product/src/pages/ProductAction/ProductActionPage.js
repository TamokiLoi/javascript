import React, { Component } from 'react';
import callApi from '../../utils/apiCaller';
import { Link } from 'react-router-dom';

class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            code: '',
            price: '',
            status: false
        }
    }

    onChange = (event) => {
        var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({ [event.target.name]: value });
    }

    onSave = (event) => {
        var { history } = this.props;
        event.preventDefault();
        callApi('product', 'POST', this.state).then(res => {
            if (res && res.data)
                history.goBack();
        });
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
                                    onChange={this.onChange}
                                />In stocks
                            </label>
                        </div>
                    </div>

                    <Link to="/product" className="btn btn-default mr-5">Back to List</Link>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default ProductActionPage;
