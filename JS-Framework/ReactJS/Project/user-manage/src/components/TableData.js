import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    mappingDataUser = () => this.props.dataUserProps.map((value, key) => (
        <TableDataRow
            key={key}
            item={value}
            index={key}
            editUserToTableData={(user) => this.props.editUserToApp(value)}
            deleteUserToTableData={(userId) => this.props.deleteUserToApp(value.id)}
        />
    ))

    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;