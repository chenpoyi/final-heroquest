import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import NavBar from './components/NavBar';
import MediaCard from './components/TitleCard';
import {getDrawerList} from './helpers/selectors';


interface IProps {
  

}
interface IState {
  message?: string;
}


class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 
  }

  drawerList: string[] = getDrawerList();

  render() {
    return (
      <div className="App">
        <NavBar drawerList ={this.drawerList}/>
        <MediaCard/>
      </div>
    );
  }
}

export default App;

{/* <h1>{ this.state.message }</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>    */}