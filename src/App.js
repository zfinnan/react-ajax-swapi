import Axios from 'axios';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './components/UI/Home'
import Spinner from './components/UI/Spinner'
import './App.css';
import StarshipPage from './components/Starships/StarshipPage';

class App extends Component {
  state = {
    starships: [],
    loading: true
  }

  async componentDidMount() {
    if (!this.state.starships || !this.state.starships.length);
    const response = await Axios.get('https://swapi.dev/api/starships');
    const { results } = await response.data;
    this.setState({ starships: results, loading: false })
  }

  render() {
    const { loading,starships } = this.state;
    return (
      <div className="App">
        <header>STAR WARS STAR SHIPS</header>
        <Switch>
          <Route path='/starship' render={() => <StarshipPage 
            loading={loading} 
            location={location}
          />} />
          <Route 
            exact
            path='/'
            render={() => {
              return <Home loading={loading} starships={starships} />
            }}
          />
        </Switch>
      </div>
    )
  }
}

export default App;
