import React from 'react';
import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem'

const RecipeList = (props) => (
  <div className="RecipeList">
    <div className="row">
      {props.recipes.map(item => (
        <RecipeItem
          key={item.title}
          title={item.title}
          ingredients={item.ingredients}
          imgSrc={item.imgSrc}
          searchString={props.searchString} />)
      )}
    </div>
  </div>
)

RecipeList.propType = {
  recipes: PropTypes.array,
  searchString: PropTypes.string
}

RecipeList.defaultProps = {
  recipes: []
}

export default RecipeList