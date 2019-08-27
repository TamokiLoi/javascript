import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import dataDemo from './../data/data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormAdd: false,
      showFormEdit: false,
      dataUser: [],
      searchText: '',
      userEditOject: {}
    }
  }

  componentWillMount() {
    // check data from localstorage
    var data = localStorage.getItem('dataUser');
    if (data === null) {
      localStorage.setItem('dataUser', JSON.stringify(dataDemo));
      this.setState({ dataUser: dataDemo });
    } else {
      var temp = JSON.parse(data);
      this.setState({ dataUser: temp });
    }
  }

  updateLocalStorage = (items) => {
    localStorage.setItem('dataUser', JSON.stringify(items));
  }

  // change state for show-form-add
  changeStateFormAdd = () => {
    this.setState({
      showFormAdd: !this.state.showFormAdd
    });
  }

  // change state for show-form-edit
  changeStateFormEdit = () => {
    this.setState({
      showFormEdit: !this.state.showFormEdit
    });
  }

  // get text-searct from search-component
  getTextSearch = (text) => {
    this.setState({
      searchText: text.toLowerCase()
    });
  }

  // get new-user-data from add-user-component
  getNewUserData = (item) => {
    var items = this.state.dataUser;
    items.push(item)
    this.setState({ dataUser: items });
    this.updateLocalStorage(items);
  }

  // edit user by id from table-data-component
  editUser = (user) => {
    this.setState({ userEditOject: user });
    this.changeStateFormEdit();
  }

  // get user-info updated from search-component
  getUserEditInfoToApp = (info) => {
    this.state.dataUser.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.phone = info.phone;
        value.permission = info.permission;
      }
    })
    this.updateLocalStorage(this.state.dataUser);
  }

  // delete user by id from table-data-component
  deleteUser = (userId) => {
    var temp = this.state.dataUser.filter((value) => value.id !== userId)
    this.setState({ dataUser: temp });
    this.updateLocalStorage(temp);
  }

  render() {
    var resultSearch = [];
    // reload list-data when search
    this.state.dataUser.forEach((item) => {
      if (item.name.toLowerCase().indexOf(this.state.searchText) !== -1) {
        resultSearch.push(item);
      }
    })
    return (
      <div>
        <Header />
        <div className="search-form">
          <div className="container">
            <div className="row">
              <Search
                showFormAdd={this.state.showFormAdd}
                showFormEdit={this.state.showFormEdit}
                userEditObject={this.state.userEditOject}
                changeStateFormAdd={() => this.changeStateFormAdd()}
                changeStateFormEdit={() => this.changeStateFormEdit()}
                sendTextSearch={(text) => this.getTextSearch(text)}
                getUserEditInfoToApp={(info) => this.getUserEditInfoToApp(info)}
              />
              <TableData
                dataUserProps={resultSearch}
                editUserToApp={(user) => this.editUser(user)}
                deleteUserToApp={(userId) => this.deleteUser(userId)}
              />
              <AddUser
                showFormAdd={this.state.showFormAdd}
                sendNewUserData={(item) => this.getNewUserData(item)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
