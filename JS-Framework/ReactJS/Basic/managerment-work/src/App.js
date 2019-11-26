import React, { Component } from 'react';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Management Work</h1>
                    <hr />
                </div>

                <div className="row">
                    {/* form add */}
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="panel panel-warning">
                            <div className="panel-heading">
                                <h3 className="panel-title">
                                    Add Work
                                        <span className="fa fa-times-circle text-right"></span>
                                </h3>
                            </div>
                            <div className="panel-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Status</label>
                                        <select
                                            className="form-control"
                                            name="status"
                                        >
                                            <option value="0">InActive</option>
                                            <option value="1">Active</option>
                                        </select>
                                    </div>

                                    <br />
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-warning">
                                            <span className="fa fa-plus mr-5"></span>
                                            Save
                                        </button>&nbsp;
                                        <button type="reset" className="btn btn-danger">
                                            <span className="fa fa-close mr-5"></span>
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        {/* show form add */}
                        <button type="button" className="btn btn-primary">
                            <span className="fa fa-plus mr-5"></span>
                            Add Work
                        </button>

                        <div className="row mt-15">
                            {/* search */}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter keywords..." />
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-primary">
                                            <span className="fa fa-search mr-5"></span>
                                            Search
                                        </button>
                                    </span>
                                </div>
                            </div>

                            {/* filter */}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="dropdown">
                                    <button type="button" className="btn btn-primary dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        Filter
                                        <span className="fa fa-caret-square-o-down ml-5"></span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li>
                                            <a role="button" href="/">
                                                <span className="fa fa-sort-alpha-asc pr-5">
                                                    Tên A-Z
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a role="button" href="/">
                                                <span className="fa fa-sort-alpha-desc pr-5">
                                                    Name Z-A
                                                </span>
                                            </a>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li><a role="button" href="/">Status Active</a></li>
                                        <li><a role="button" href="/">Status InActive</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* table */}
                    <div className="row mt-15">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input type="text" className="form-control" />
                                        </td>
                                        <td>
                                            <select className="form-control">
                                                <option value="-1">All</option>
                                                <option value="0">InActive</option>
                                                <option value="1">Active</option>
                                            </select>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Học lập trình</td>
                                        <td className="text-center">
                                            <span className="label label-success">
                                                Kích Hoạt
                                                </span>
                                        </td>
                                        <td className="text-center">
                                            <button type="button" className="btn btn-warning">
                                                <span className="fa fa-pencil mr-5"></span>Sửa
                                        </button>
                                            &nbsp;
                                        <button type="button" className="btn btn-danger">
                                                <span className="fa fa-trash mr-5"></span>Xóa
                                        </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
