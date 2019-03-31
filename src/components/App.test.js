import React from 'react'
import { mount, shallow } from 'enzyme'
import App from './App'
import RecipeList from './RecipeList'
import Navbar from './Navbar'
import recipes from '../sample_data/recipes.json'

jest.mock('../sample_data/recipes.json', () => ({
  "results": [
    {
        "title": "Ginger Champagne",
        "href": "http:\/\/allrecipes.com\/Recipe\/Ginger-Champagne\/Detail.aspx",
        "ingredients": "champagne, ginger, ice, vodka",
        "thumbnail": "http:\/\/img.recipepuppy.com\/1.jpg"
    },
    {
        "title": "Potato and Cheese Frittata",
        "href": "http:\/\/allrecipes.com\/Recipe\/Potato-and-Cheese-Frittata\/Detail.aspx",
        "ingredients": "cheddar cheese, eggs, olive oil, onions, potato, salt",
        "thumbnail": "http:\/\/img.recipepuppy.com\/2.jpg"
    },
    {
        "title": "Eggnog Thumbprints",
        "href": "http:\/\/allrecipes.com\/Recipe\/Eggnog-Thumbprints\/Detail.aspx",
        "ingredients": "brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar",
        "thumbnail": "http:\/\/img.recipepuppy.com\/3.jpg"
    }
  ]
}))

describe('App', () => {

  
  test('Should be App', () => {
    const wrapper = mount(<App />);
    expect(wrapper.is('App')).toBeTruthy();
  })

  test('Renders <RecipeList /> correctily', () => {
    const wrapper = mount(<App />)
    const wrapperRecipeList = wrapper.find(RecipeList)
    expect(wrapperRecipeList).toHaveLength(1)
  })

  test('<RecipeList /> get props correctily', () => {    
    const wrapper = shallow(<App />)
    const wrapperRecipeList = wrapper.find(RecipeList)
    const recipesProp = wrapperRecipeList.props().recipes

    expect(wrapperRecipeList.props().recipes).toHaveLength(recipes.results.length)

    recipes.results.forEach((item, index) => {
      expect(item.title).toBe(recipesProp[index].title)
      expect(item.ingredients).toBe(recipesProp[index].ingredients)
      expect(item.imgSrc).toBe(recipesProp[index].thumbnail)
    })

    wrapper.setState({searchString: 'eggs'})    
    expect(wrapper.state('searchString')).toBe(wrapper.find(RecipeList).props().searchString)
  })

  test('handleSearch Call alter state searchString', () => {
    const wrapper = shallow(<App />)
    let value = 'eggs'
    wrapper.instance().handleSearch(value)
    expect(wrapper.state('searchString')).toBe(value)
  })

  test('<Navbar /> define prop onSearch', () => {
    const wrapper = shallow(<App />)
    const wrapperNavbar = wrapper.find(Navbar)
    expect(wrapperNavbar.props().onSearch).toBe(wrapper.instance().handleSearch)
  })

  test('Set searchString do method getRecipesItems return data filtered', () => {
    let wrapper = shallow(<App />)
    
    wrapper.setState({'searchString': 'eggs'})
    expect(wrapper.instance().getRecipesItems()).toHaveLength(2)

    wrapper.setState({'searchString': 'EGGS'})
    expect(wrapper.instance().getRecipesItems()).toHaveLength(2)
    
    wrapper.setState({'searchString': 'Thumbprints'})
    expect(wrapper.instance().getRecipesItems()).toHaveLength(1)
  })

  test('Render \'No Resutls to show\' to render When not result in search', () => {
    const wrapper = shallow(<App />)
    wrapper.setState({searchString: '!@#!#@!#!#@!#'})
    expect(wrapper.text()).toContain('No Results to show')
  })
})
