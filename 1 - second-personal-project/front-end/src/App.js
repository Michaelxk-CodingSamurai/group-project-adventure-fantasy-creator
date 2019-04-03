import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
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
        this.setState({
          elements: res.data
        })
      })
  }

  createElements = (element) => {
    axios.post('http://localhost:5000/elements', element)
      .then(res => {
      })
  }

  addElement = (state) => {
    let newData = {
      name: state.name,
      category: state.category,
      image: state.img,
      subcategory: state.subcategory
    }
      this.createElements(newData)
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' render={() =>  <Display elements={this.state.elements} />} />
          <Route path='/creator' render={() => <Creator addElement={this.addElement} />} />
        </Switch>
      </div>  
    );
  }
}

export default App;


