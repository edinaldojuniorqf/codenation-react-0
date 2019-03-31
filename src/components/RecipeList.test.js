import React from 'react'
import { mount, shallow } from 'enzyme'
import RecipeList from './RecipeList'
import RecipeItem from './RecipeItem'

describe('RecipeList', () => {
  test('Should be RecipeList', () => {
    const wrapper = mount(<RecipeList />);
    expect(wrapper.is('RecipeList')).toBeTruthy();
  })

  test('Renders <RecipeItem /> with data for each item in prop recipeItems', () => {
    const recipes = [
      {
        "title": "Potato and Cheese Frittata",
        "href": "http:\/\/allrecipes.com\/Recipe\/Potato-and-Cheese-Frittata\/Detail.aspx",
        "ingredients": "cheddar cheese, eggs, olive oil, onions, potato, salt",
        "imgSrc": "http:\/\/img.recipepuppy.com\/2.jpg",
      },
      {
        "title": "Eggnog Thumbprints",
        "href": "http:\/\/allrecipes.com\/Recipe\/Eggnog-Thumbprints\/Detail.aspx",
        "ingredients": "brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar",
        "imgSrc": "http:\/\/img.recipepuppy.com\/3.jpg",
      },
      {
        "title": "Succulent Pork Roast",
        "href": "http:\/\/allrecipes.com\/Recipe\/Succulent-Pork-Roast\/Detail.aspx",
        "ingredients": "brown sugar, garlic, pork chops, water",
        "imgSrc": "http:\/\/img.recipepuppy.com\/4.jpg"
      }
    ]

    const searchString = 'eggs'
    const wrapper = shallow(<RecipeList recipes={recipes} searchString={searchString} />)
    const wrappersRecipeItem = wrapper.find(RecipeItem)
    expect(wrappersRecipeItem).toHaveLength(recipes.length)
    wrappersRecipeItem.forEach((wrapperItem, index) => {
      expect(wrapperItem.props().title).toBe(recipes[index].title)
      expect(wrapperItem.props().ingredients).toBe(recipes[index].ingredients)
      expect(wrapperItem.props().imgSrc).toBe(recipes[index].imgSrc)
      expect(wrapperItem.props().searchString).toBe(searchString)
    })
  })
})
