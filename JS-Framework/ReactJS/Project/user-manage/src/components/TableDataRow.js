import React, { Component } from 'react';

class TableDataRow extends Component {

    // format data permission
    permissionShow = () => {
        switch (this.props.item.permission) {
            case 1:
                return 'Admin';
                break;
            case 2:
                return 'Moderator';
                break;
            default:
                return 'Normal';
                break;
        }
    }

    render() {
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.phone}</td>
                <td>{this.permissionShow()}</td>
                <td>
                    <div className="btn-group">
                        {/* call edit-user to table-data-component */}
                        <div onClick={() => this.props.editUserToTableData()} className="btn btn-warning edit"><i className="fa fa-edit" />Edit</div>
                        {/* call delete user to table-data-component */}
                        <div onClick={() => this.props.deleteUserToTableData()} className="btn btn-danger delete"><i className="fa fa-trash" />Delete</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;