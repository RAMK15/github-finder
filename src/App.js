import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css'; 

class App extends Component{
  render(){
    return (
      <div className="App">
        <Navbar title='Github-Finder' icon='fab fa-github'/>
        <div className='container'>
          <Users/>
        </div>
        
      </div>
    );
  }
  /*render(){
    const name = "Ram";
    const hello = () => "Hello";
    const loading = false;
    const showName = true;
    return (
      <div className="App">
        {loading?<h1>Loading...</h1>:<h1>{hello()} {showName && name.toUpperCase()} to {this.getApp()}</h1>}
        <Navbar title='Github-Finder' icon='fab fa-github'/>
        <UserItem/>
      </div>
    );
  }*/
  /*render(){
    return (
      <React.Fragment>
        <h1>Hello Ram in fragment</h1>
      </React.Fragment>
    );
  }*/
  /*render(){
    return(
      <>
        <h1>Hello Ram in empty angular bracket</h1>
      </>
    );
  }*/
 
}

export default App;
