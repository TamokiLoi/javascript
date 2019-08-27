import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateDemo: 0
        }
    }

    notification = () => { alert('Handling interaction in reactjs') }

    notification2 = (x) => { alert(x) }

    renderButton = () => (
        <div className="row">
            <div className="btn btn-group">
                <div className="btn btn-info" onClick={() => this.editClick()}>Edit</div>
                <div className="btn btn-danger" onClick={() => this.notification2('param')}>Remove</div>
                <div className="btn btn-warning" onClick={this.notification2.bind(this, 'param')}>Option</div>
            </div>
        </div>
    );

    renderForm = () => (
        <div className="row">
            <div className="form-group">
                <input ref={(dataInput) => {this.dataInput = dataInput}} defaultValue={this.props.title} type="text" name="name" className="form-control" />
            </div>

            <div className="form-group">
                <div className="btn btn-block btn-success" onClick={() => this.saveClick()}>Save</div>
            </div>
        </div>
    );


    displayCheck = () => {
        if (this.state.stateDemo === 0) {
            return this.renderButton();
        } else {
            return this.renderForm();
        }
    }

    editClick = () => {
        this.setState({ stateDemo: this.state.stateDemo = 1 });
    }

    saveClick = () => {
        this.setState({ stateDemo: this.state.stateDemo = 0 });
        console.log(this.dataInput.value)
    }

    render() {
        return (
            <div className="col-lg-4">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="p-1">
                            <img className="img-fluid rounded-circle" src={this.props.srcImg} alt />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="p-1">
                            <h4 className="display-6">{this.props.title}</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            {this.displayCheck()}
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;