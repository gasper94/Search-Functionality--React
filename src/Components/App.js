import React, { Component } from 'react';
import UserList from './UserList';
import { users } from './usersArray';
import SearchBox from './SearchBox';

class App extends Component{
    constructor() {
        super()
        // This are the states where users
        // and searchfield are been passed as props
        this.state = {
            users: users,
            searchfield: ''
        }
    }

    // Even listener for modifying filtered users.
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value});
    }

    render() {

        // Filtered users
        const filteredUsers = this.state.users.filter(users =>{
            return users.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })  
        return (
            <div className='tc'>
                <h1>Webpage</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <UserList users={filteredUsers}/>
            </div> 
        );
    }
}

export default App;