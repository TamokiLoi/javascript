import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

class TaskSearch extends Component {

    constructor(props) {
        super(props);
        this.state = { keyword: '' }
    }

    onChange = (event) => { this.setState({ keyword: event.target.value }) }
    onSearch = () => { this.props.onFilter({ name: this.state.keyword }) }

    render() {
        var { keyword } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter keywords..."
                        name="keyword"
                        value={keyword}
                        onChange={this.onChange}
                    />
                    <span className="input-group-btn">
                        <button type="button" className="btn btn-primary"
                            onClick={this.onSearch}>
                            <span className="fa fa-search mr-5"></span>
                            Search
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onFilter: (filter) => { dispatch(actions.filterTable(filter)); },
    }
}

export default connect(null, mapDispatchToProps)(TaskSearch);
