import React from 'react'
import PropTypes from 'prop-types'

const RecipeItem = (props) => (
    <div className="col-sm-3 mt-4">
        <div className="card">
            <img className="card-img-top img-fluid" src={props.imgSrc} alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{ props.title }</h5>
                <p className="card-text">
                    <strong>Ingredients: </strong>{ props.ingredients }
                </p>
            </div>
        </div>
    </div>
)

RecipeItem.propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    imgSrc: PropTypes.string
}

RecipeItem.defaultProps = {
    imgSrc: 'https://via.placeholder.com/350x300'
}

export default RecipeItem;