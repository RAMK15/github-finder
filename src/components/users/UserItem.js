import React, { Component } from 'react'

export class UserItem extends Component {
    /*constructor(){
        super();
        this.state = {
            id: 'RAM-IMANAGE',
            login: 'RAM-IMANAGE',
            avatar_url: 'https://avatars.githubusercontent.com/u/53936481?v=4',
            html_url : 'https://github.com/RAM-IMANAGE'
        }
        console.log(123)
    }*/
  render() {
      /*To avoid using this.state.avatar_url always
    const {login, avatar_url, html_url} = this.state;*/
    const {login, avatar_url, html_url} = this.props.user;
    return (
      <div className='card text-center'>
        <img src={avatar_url} alt='' className='round-img' style={{width: '60px'}}/>
        <h3>{login}</h3>
        <div>
            <a href={html_url} className='btn btn-dark btn-sm my-1'>More</a>
        </div>
      </div>
    );
  }
}

export default UserItem
