import React, { Component } from 'react'
import Navbar from './Navbar'
import RecipeList from './RecipeList'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props)

    this.recipes = recipes.results
    this.state = {
      searchString: ''
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch (searchString) {
    this.setState({ searchString })
  }

  getRecipesItems () {
    let re = new RegExp(this.state.searchString, 'gi')

    let recipes = this.recipes.map(item => ({
        title: item.title,
        ingredients: item.ingredients,
        imgSrc: item.thumbnail
    })).filter(item => re.test(item.ingredients) || re.test(item.title))

    return recipes
  }

  render() { 
    return (
      <div className="App">
        <Navbar onSearch={this.handleSearch} />
        <div className="container mt-10">
          <RecipeList recipes={this.getRecipesItems()} />
        </div>
      </div>
    );
  }
}

export default App
