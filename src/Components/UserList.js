import React from  'react';
import UserCard from './User';

// Map users into Users by passing details as props
const UserList = ({ users }) => {
    return (
        <div>
            {
                users.map((user, i) => {
                    return (
                        <UserCard
                            key={i}
                            id={users[i].id}
                            name={users[i].name}
                            email={users[i].email}
                        />
                    );
                })
            }
        </div>  
    );
}

export default UserList;