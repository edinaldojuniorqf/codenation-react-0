import React from 'react';
import { mount, shallow } from 'enzyme';
import RecipeItem from './RecipeItem';

describe('RecipeItem', () => {
    test('Should be RecipeItem', () => {
        const wrapper = mount(<RecipeItem title="" ingredients="" />);
        expect(wrapper.is('RecipeItem')).toBeTruthy();
    })

    test('Render prop title', () => {
        const title = 'Ginger Champagne'
        const wrapper = shallow(<RecipeItem title={title} ingredients="" />)
        expect(wrapper.text()).toContain(title)
    })

    test('Render prop ingredients', () => {
        const ingredients = 'cheddar cheese, eggs, olive oil, onions, potato, salt'
        const wrapper = shallow(<RecipeItem title="" ingredients={ingredients} />)
        expect(wrapper.text()).toContain(ingredients)
    })

    test('Render <img /> with attr src the prop imgSrc', () => {
        const imgSrc = "image-test.jpg"
        const wrapper = shallow(<RecipeItem title="" ingredients="" imgSrc={imgSrc} />)
        const img = wrapper.find('img.card-img-top')
        expect(img.props().src).toBe(imgSrc)
    })

    test('Render <img /> with atrr alt the prop title', () => {
        const title = 'Eggnog Thumbprints'
        const wrapper = shallow(<RecipeItem title={title} ingredients="" />)
        const img = wrapper.find('img.card-img-top')
        expect(img.props().alt).toBe(title)
    })
})
