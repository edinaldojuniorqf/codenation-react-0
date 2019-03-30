import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import RecipeList from './RecipeList'
import recipes from '../sample_data/recipes.json'

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
    const wrapper = mount(<App />)
    const wrapperRecipeList = wrapper.find(RecipeList)
    const recipesProp = wrapperRecipeList.props().recipes

    expect(wrapperRecipeList.props().recipes).toHaveLength(recipes.results.length)

    recipes.results.forEach((item, index) => {
      expect(item.title).toBe(recipesProp[index].title)
      expect(item.ingredients).toBe(recipesProp[index].ingredients)
      expect(item.imgSrc).toBe(recipesProp[index].thumbnail)
    })
  })
})
