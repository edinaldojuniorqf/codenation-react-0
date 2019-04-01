import React from 'react'
import PropTypes from 'prop-types'

const Mark = (props) => {
  let { text, higthligth } = props
  let regex = new RegExp(`(${higthligth})`, 'gi')
  let parts = text.split(regex)

  return parts.map((part, index) => {
    if (new RegExp(part, 'gi').test(higthligth)) {
      return <mark key={index}>{ part }</mark>
    }
    
    return part
  })
}

const RecipeItem = (props) => (
  <div className="col-sm-3 mt-4">
    <div className="card">
      <img className="card-img-top img-fluid" src={props.imgSrc} alt={props.title} />
      <div className="card-body">
        <h5 className="card-title"><Mark text={ props.title } higthligth={props.searchString} /></h5>
        <p className="card-text">
          <strong>Ingredients: </strong><Mark text={ props.ingredients } higthligth={props.searchString} />
        </p>
      </div>
    </div>
  </div>
)

RecipeItem.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  searchString: PropTypes.string
}

RecipeItem.defaultProps = {
  imgSrc: 'https://via.placeholder.com/350x300'
}

export default RecipeItem;