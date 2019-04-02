import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Switch, Route } from 'react-router-dom';
// import Navbar from './navbar'
import Display from './components/Display'
import Creator from './components/Creator';


class App extends Component {

  state = {

    elements: []


  }

  componentDidMount() {
    this.getElements()
  }

  getElements = () => {
    axios.get('http://localhost:5000/elements')
      .then(res => {
        console.log(res.data)
        this.setState({
          elements: res.data
        })
      })
  }

  addToCategory = (a, b) => {

    let newStats = [...this.state.elements, { a, b }]

    this.setState({

      subCategory: newStats

    })

  }


  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <Switch>
          <Route exact path='/' render={() =>  <Display elements={this.state.elements} />} />
          <Route path='/creator' render={() => <Creator creatorInput={this.addToCategory} />} />
        </Switch>
      </div>  
    );
  }
}

export default App;

