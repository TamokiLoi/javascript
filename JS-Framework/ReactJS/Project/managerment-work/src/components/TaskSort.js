import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

class TaskSort extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sort: {
                by: 'name',
                value: 1
            }
        }
    }

    onClick = (sortBy, sortValue) => {
        var sort = { by: sortBy, value: sortValue }
        this.setState({ sort: sort });
        this.props.onSort(sort);
    }

    render() {
        var someValidPath = null;
        var { sort } = this.state;
        
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        Sort
                        <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={() => this.onClick('name', 1)}>
                            <a
                                role="button"
                                href={someValidPath}
                                className={(sort.by === 'name' && sort.value === 1) ? 'sort_selected' : ''}
                            >
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Name A-Z
                                </span>
                            </a>
                        </li>
                        <li onClick={() => this.onClick('name', -1)}>
                            <a
                                role="button"
                                href={someValidPath}
                                className={(sort.by === 'name' && sort.value === -1) ? 'sort_selected' : ''}
                            >
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Name Z-A
                                </span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={() => this.onClick('status', 1)}>
                            <a
                                role="button"
                                href={someValidPath}
                                className={(sort.by === 'status' && sort.value === 1) ? 'sort_selected' : ''}
                            >Status Active</a>
                        </li>
                        <li onClick={() => this.onClick('status', -1)}>
                            <a
                                role="button"
                                href={someValidPath}
                                className={(sort.by === 'status' && sort.value === -1) ? 'sort_selected' : ''}
                            >Status InActive</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSort: (sort) => { dispatch(actions.sortTable(sort)); }
    }
}

export default connect(null, mapDispatchToProps)(TaskSort);
