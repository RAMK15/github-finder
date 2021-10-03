import React, { Component } from 'react'
import UserItem from './UserItem';
export class Users extends Component {
    state = {
        users: [
            {
                id: '1',
                login: 'RAM-IMANAGE',
                avatar_url: 'https://avatars.githubusercontent.com/u/53936481?v=4',
                html_url : 'https://github.com/RAM-IMANAGE'
            },
            {
                id: '2',
                login: 'RAM-IMANAGE2',
                avatar_url: 'https://avatars.githubusercontent.com/u/53936481?v=4',
                html_url : 'https://github.com/RAM-IMANAGE'
            },
            {
                id: '3',
                login: 'RAM-IMANAGE3',
                avatar_url: 'https://avatars.githubusercontent.com/u/53936481?v=4',
                html_url : 'https://github.com/RAM-IMANAGE'
            }
        ]
    };
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
            <UserItem key={user.id} user={user}></UserItem>
        ))}
      </div>
    );
  }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'

};

export default Users
