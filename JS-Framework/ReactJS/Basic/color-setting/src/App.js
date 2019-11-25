import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            color: 'red',
            fontSize: 12
        }
    }

    onChangeColor = (params) => {
        this.setState({ color: params });
    }

    onChangeFontSize = (params) => {
        // 8 <= size <= 36
        this.setState({
            fontSize: (this.state.fontSize + params >= 8 && this.state.fontSize + params <= 36)
                ? this.state.fontSize + params : this.state.fontSize
        })
    }

    onSettingDefault = () => {
        this.setState({
            color: 'red',
            fontSize: 12
        })
    }

    render() {
        return (

            <div className="container mt-50">
                <div className="row">
                    <ColorPicker
                        color={this.state.color}
                        onChangeColor={this.onChangeColor}
                    />

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting
                            fontSize={this.state.fontSize}
                            onChangeFontSize={this.onChangeFontSize}
                        />

                        <Reset onSettingDefault={this.onSettingDefault}/>
                    </div>

                    <Result
                        color={this.state.color}
                        fontSize={this.state.fontSize}
                    />
                </div>
            </div>

        );
    }
}

export default App;
