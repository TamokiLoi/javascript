import React, { Component } from "react";
import "./App.css";
import HeadTitle from "./HeadTitle";
import Product from "./Product";
import axios from "axios";

const getProductData = () => {
    return axios.get('/getdata')
        .then((response) => response.data);
}

const addProductAction = (product_name, product_price, product_image) => {
    return axios.post('/add', { product_name, product_price, product_image })
        .then((resp) => resp.data);
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            product_name: '',
            product_price: '',
            product_image: '',
        }
    }

    componentWillMount() {
        if (this.state.data === null) {
            getProductData().then((res) => {
                this.setState({
                    data: res
                });
            })
        }
    }

    printData = () => {
        if (this.state.data !== null) {
            return this.state.data.map((value, key) => {
                return (
                    <Product
                        key={key}
                        product_name={value.product_name}
                        product_price={value.product_price}
                        image={value.image}
                    />
                )
            })
        }
    }

    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleClick = () => {
        var { product_name } = this.state;
        var { product_price } = this.state;
        var { product_image } = this.state;
        var item = {};
        item.product_name = product_name;
        item.product_price = product_price;
        item.image = product_image;
        var dataTemp = [];
        dataTemp = this.state.data;
        if (item.product_name !== '') {
            dataTemp.push(item);
            this.setState({
                data: dataTemp
            });
        }
        addProductAction(product_name, product_price, product_image)
            .then((res) => {
                console.log(res);
            })
    }

    render() {
        return (
            <div>
                <HeadTitle />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                {this.printData()}
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="row">
                                <div className="ml-4">
                                    <form >
                                        <div className="form-group">
                                            <label htmlFor="product_name">Product Name</label>
                                            <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="product_name" id aria-describedby="helpId" placeholder="enter the product name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="product_price">Product Price</label>
                                            <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="product_price" id aria-describedby="helpId" placeholder="enter the product price" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="product_image">Product URL Image</label>
                                            <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="product_image" id aria-describedby="helpId" placeholder="enter the product url image" />
                                        </div>
                                        <button onClick={() => this.handleClick()} type="reset" className="btn btn-block btn-info">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
