import React, { Component } from 'react';

class SizeSetting extends Component {

    changeFontSize(size) {
        this.props.onChangeFontSize(size);
    }

    render() {
        return (

            <div>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Size : {this.props.fontSize}</h3>
                    </div>
                    <div className="panel-body">
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => this.changeFontSize(-2)}>
                            Decrease</button>&nbsp;
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => this.changeFontSize(+2)}>
                            Increase</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default SizeSetting;
