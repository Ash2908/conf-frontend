import React, {Component} from 'react';
import {TileList} from './components/tile-list/tile-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      conferences : [],
      searchField: ''
    };
  }
  
  componentDidMount() {
    fetch('https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences')
    .then(response => response.json())
    .then(events =>this.setState({conferences: [...events.paid, ...events.free]}));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
  const { conferences, searchField } = this.state; 
  const filteredConferences = 
  conferences.filter(conference => conference.confName.toLowerCase().includes(searchField.toLowerCase())||conference.city.toLowerCase().includes(searchField.toLowerCase())); 
  console.log(filteredConferences);
  return !conferences.length ?
  <h1>Loading</h1> :
  (
    <div className='App'>
      <h1>Tech Conferences </h1>
      <SearchBox placeholder='Search by name/city' handleChange={this.handleChange} />
      <TileList confs = {filteredConferences} />
    </div>
  );
  }
}

export default App;
