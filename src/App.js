import React from 'react';
import './App.css';
import Contacts from './Components/Contacts';

class App extends React.Component {

  state = {
    contacts: [],
    lists: []
  }

  componentDidMount() {

    Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1').then(res => res.json()),
    ])
    .then((data) => {
      this.setState({ 
        contacts: data[0],
        lists: data[1]
       })
    })
    .catch(console.log)
  }
  render() {
    return (
      <div className="App">
      <Contacts contacts={this.state.contacts} />,
      {/* <Lists lists={this.state.lists} /> */}
      </div>
    );
  }
}

export default App;